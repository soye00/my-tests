import React, { useState, useEffect } from 'react';
import { Layout, Button, Modal, Tabs, Card, Flex } from 'antd';
import ReservationTable from '../components/ReservationTable';
import ReservationForm from '../components/ReservationForm';
import MiniDashboard from '../components/MiniDashboard';
import SearchFilters from '../components/SearchFilters';
import { supabase } from '../services/supabase';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const { Content } = Layout;

const ReservationManage = () => {
    const [reservations, setReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingReservation, setEditingReservation] = useState(null);
    const [filterType, setFilterType] = useState('all');
    const [filters, setFilters] = useState({
        name: '',
        tel: '',
        email: '',
        addr: '',
        state: null,
    });
    const [dateRange, setDateRange] = useState([
        dayjs().subtract(1, 'month').startOf('day'), // 한 달 전
        dayjs().endOf('day'), // 오늘
    ]);

    // 데이터 가져오기
    const fetchReservations = async () => {
        let query = supabase.from('ice_res').select('*');

        if (filterType === 'cleaning') {
            query = query.eq('service', '청소');
        } else if (filterType === 'repair') {
            query = query.eq('service', '수리');
        }

        if (dateRange.length === 2 && dayjs.isDayjs(dateRange[0]) && dayjs.isDayjs(dateRange[1])) {
            query = query
                .gte('date', dateRange[0].toISOString())
                .lte('date', dateRange[1].toISOString());
        } else {
            setDateRange([dayjs().subtract(1, 'month').startOf('day'), dayjs().endOf('day')]);
            query = query
                .gte('date', dayjs().subtract(1, 'month').startOf('day').toISOString())
                .lte('date', dayjs().endOf('day').toISOString());
        }

        const { data, error } = await query;
        if (error) {
            console.error('Error fetching reservations:', error);
            return;
        }
        setReservations(data);
        applyFilters(data);
    };

    // 필터 적용
    const applyFilters = (data) => {
        let filtered = [...data];

        if (filters.name) {
            filtered = filtered.filter((r) =>
                r.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        }
        if (filters.tel) {
            filtered = filtered.filter((r) => r.tel.includes(filters.tel));
        }
        if (filters.email) {
            filtered = filtered.filter((r) =>
                r.email.toLowerCase().includes(filters.email.toLowerCase())
            );
        }
        if (filters.addr) {
            filtered = filtered.filter((r) =>
                r.addr.toLowerCase().includes(filters.addr.toLowerCase())
            );
        }
        if (filters.state !== null) {
            filtered = filtered.filter((r) => r.state === filters.state);
        }

        setFilteredReservations(filtered);
    };

    useEffect(() => {
        fetchReservations();
    }, [filterType, dateRange]);

    useEffect(() => {
        applyFilters(reservations);
    }, [filters]);

    // 모달 핸들러
    const showModal = (reservation = null) => {
        setEditingReservation(reservation);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setEditingReservation(null);
        fetchReservations();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingReservation(null);
    };

    return (
        <Layout style={{ minHeight: '100vh', padding: '20px' }}>
            <Content>
                <Card>
                    <Tabs
                        defaultActiveKey="all"
                        onChange={setFilterType}
                        items={[
                            { key: 'all', label: '전체' },
                            { key: 'cleaning', label: '청소' },
                            { key: 'repair', label: '수리' },
                        ]}
                    />

                    <MiniDashboard
                        reservations={reservations}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                    />

                    <SearchFilters filters={filters} setFilters={setFilters} />

                    <Flex justify="end" style={{ marginBottom: 16 }}>
                        <Button
                            type="primary"
                            onClick={() => showModal()}
                        >
                            예약등록
                        </Button>
                    </Flex>

                    <ReservationTable
                        reservations={filteredReservations}
                        onEdit={showModal}
                        onDelete={async (res_no) => {
                            await supabase.from('ice_res').delete().eq('res_no', res_no);
                            fetchReservations();
                        }}
                    />

                    <Modal
                        title={editingReservation ? '예약 수정' : '새 예약 등록'}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                        width={800}
                    >
                        <ReservationForm
                            reservation={editingReservation}
                            onSuccess={handleOk}
                        />
                    </Modal>
                </Card>
            </Content>
        </Layout>
    );
};

export default ReservationManage;