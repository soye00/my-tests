import React, { useState } from 'react';
import { Table, Button, Popconfirm, Card, Select, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';
import { supabase } from '../services/supabase';
import '../styles.css';

const { Option } = Select;

const ReservationTable = ({ reservations, onEdit, onDelete }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(null);

    const handleFieldChange = async (res_no, field, value) => {
        await supabase.from('ice_res').update({ [field]: value }).eq('res_no', res_no);
        onEdit(null); // 새로고침 트리거
    };

    const showDetails = (reservation) => {
        setSelectedReservation(reservation);
        setModalVisible(true);
    };

    const columns = [
        {
            title: '예약번호',
            dataIndex: 'res_no',
            key: 'res_no',
            width: 100,
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: '이름',
            dataIndex: 'name',
            key: 'name',
            width: 120,
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: '연락처',
            dataIndex: 'tel',
            key: 'tel',
            width: 150,
            responsive: ['md', 'lg'],
        },
        {
            title: '이메일',
            dataIndex: 'email',
            key: 'email',
            width: 200,
            responsive: ['md', 'lg'],
        },
        {
            title: '주소',
            dataIndex: 'addr',
            key: 'addr',
            width: 200,
            responsive: ['lg'],
        },
        {
            title: '예약 날짜',
            dataIndex: 'date',
            key: 'date',
            width: 120,
            render: (text) => dayjs(text).format('YYYY-MM-DD'),
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: '시간',
            dataIndex: 'time',
            key: 'time',
            width: 150,
            render: (text, record) => (
                <Select
                    value={text}
                    onChange={(value) => handleFieldChange(record.res_no, 'time', value)}
                    style={{ width: '100%' }}
                >
                    <Option value="오전 10시 ~ 오후 1시">오전 10시 ~ 오후 1시</Option>
                    <Option value="오후 2시 ~ 오후 5시">오후 2시 ~ 오후 5시</Option>
                    <Option value="오후 4시 ~ 오후 7시">오후 4시 ~ 오후 7시</Option>
                    <Option value="오후 6시 ~ 오후 9시">오후 6시 ~ 오후 9시</Option>
                </Select>
            ),
            responsive: ['md', 'lg'],
        },
        {
            title: '모델',
            dataIndex: 'model',
            key: 'model',
            width: 150,
            responsive: ['lg'],
        },
        {
            title: '용량',
            dataIndex: 'capacity',
            key: 'capacity',
            width: 150,
            render: (text, record) => (
                <Select
                    value={text}
                    onChange={(value) => handleFieldChange(record.res_no, 'capacity', value)}
                    style={{ width: '100%' }}
                >
                    <Option value="20~50kg">20~50kg</Option>
                    <Option value="50~100kg">50~100kg</Option>
                    <Option value="100kg 이상">100kg 이상</Option>
                </Select>
            ),
            responsive: ['lg'],
        },
        {
            title: '서비스',
            dataIndex: 'service',
            key: 'service',
            width: 100,
            render: (text, record) => (
                <Select
                    value={text}
                    onChange={(value) => handleFieldChange(record.res_no, 'service', value)}
                    style={{ width: '100%' }}
                >
                    <Option value="청소">청소</Option>
                    <Option value="수리">수리</Option>
                </Select>
            ),
            responsive: ['md', 'lg'],
        },
        {
            title: '주기',
            dataIndex: 'cycle',
            key: 'cycle',
            width: 150,
            render: (text, record) => (
                <Select
                    value={text}
                    onChange={(value) => handleFieldChange(record.res_no, 'cycle', value)}
                    style={{ width: '100%' }}
                >
                    <Option value="이번 한 번만">이번 한 번만</Option>
                    <Option value="한 달에 한 번">한 달에 한 번</Option>
                </Select>
            ),
            responsive: ['lg'],
        },
        {
            title: '추가사항',
            dataIndex: 'add',
            key: 'add',
            width: 200,
            render: (text, record) => (
                <Select
                    value={text}
                    onChange={(value) => handleFieldChange(record.res_no, 'add', value)}
                    style={{ width: '100%' }}
                >
                    <Option value="심화 청소">심화 청소</Option>
                    <Option value="물탱크 청소">물탱크 청소</Option>
                    <Option value="필터 교체">필터 교체</Option>
                    <Option value="선택 안함">선택 안함</Option>
                </Select>
            ),
            responsive: ['lg'],
        },
        {
            title: '비고',
            dataIndex: 'remark',
            key: 'remark',
            width: 200,
            responsive: ['lg'],
        },
        {
            title: '보증금',
            dataIndex: 'deposit',
            key: 'deposit',
            width: 120,
            responsive: ['md', 'lg'],
        },
        {
            title: '상태',
            dataIndex: 'state',
            key: 'state',
            width: 120,
            render: (state, record) => (
                <Select
                    value={state}
                    onChange={(value) => handleFieldChange(record.res_no, 'state', value)}
                    style={{ width: '100%' }}
                >
                    <Option value={1}>예약대기</Option>
                    <Option value={2}>배정대기</Option>
                    <Option value={3}>배정완료</Option>
                    <Option value={4}>처리중</Option>
                    <Option value={5}>처리완료</Option>
                    <Option value={9}>취소</Option>
                </Select>
            ),
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: '액션',
            key: 'action',
            width: 120,
            render: (_, record) => (
                <>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => onEdit(record)}
                        style={{ marginRight: 8 }}
                        size={isMobile ? 'small' : 'middle'}
                    />
                    <Popconfirm
                        title="예약을 취소하시겠습니까?"
                        onConfirm={() => onDelete(record.res_no)}
                    >
                        <Button icon={<DeleteOutlined />} danger size={isMobile ? 'small' : 'middle'} />
                    </Popconfirm>
                </>
            ),
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
    ];

    if (isMobile) {
        return (
            <>
                <div style={{ padding: '0 8px' }}>
                    {reservations.map((record) => (
                        <Card
                            key={record.res_no}
                            style={{ marginBottom: 16, borderRadius: 8 }}
                            title={`예약번호: ${record.res_no}`}
                            extra={
                                <div>
                                    <Button
                                        icon={<EyeOutlined />}
                                        onClick={() => showDetails(record)}
                                        style={{ marginRight: 8 }}
                                        size="small"
                                    />
                                    <Button
                                        icon={<EditOutlined />}
                                        onClick={() => onEdit(record)}
                                        style={{ marginRight: 8 }}
                                        size="small"
                                    />
                                    <Popconfirm
                                        title="예약을 취소하시겠습니까?"
                                        onConfirm={() => onDelete(record.res_no)}
                                    >
                                        <Button icon={<DeleteOutlined />} danger size="small" />
                                    </Popconfirm>
                                </div>
                            }
                        >
                            <p><strong>이름:</strong> {record.name}</p>
                            <p><strong>예약 날짜:</strong> {dayjs(record.date).format('YYYY-MM-DD')}</p>
                            <p><strong>상태:</strong> {
                                ({
                                    1: '예약대기',
                                    2: '배정대기',
                                    3: '배정완료',
                                    4: '처리중',
                                    5: '처리완료',
                                    9: '취소',
                                })[record.state] || '알 수 없음'
                            }</p>
                        </Card>
                    ))}
                </div>
                <Modal
                    title="예약 상세 정보"
                    open={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                >
                    {selectedReservation && (
                        <div>
                            <p><strong>예약번호:</strong> {selectedReservation.res_no}</p>
                            <p><strong>이름:</strong> {selectedReservation.name}</p>
                            <p><strong>연락처:</strong> {selectedReservation.tel}</p>
                            <p><strong>이메일:</strong> {selectedReservation.email}</p>
                            <p><strong>주소:</strong> {selectedReservation.addr}</p>
                            <p><strong>예약 날짜:</strong> {dayjs(selectedReservation.date).format('YYYY-MM-DD')}</p>
                            <p><strong>시간:</strong> {selectedReservation.time}</p>
                            <p><strong>모델:</strong> {selectedReservation.model}</p>
                            <p><strong>용량:</strong> {selectedReservation.capacity}</p>
                            <p><strong>서비스:</strong> {selectedReservation.service}</p>
                            <p><strong>주기:</strong> {selectedReservation.cycle}</p>
                            <p><strong>추가사항:</strong> {selectedReservation.add}</p>
                            <p><strong>비고:</strong> {selectedReservation.remark}</p>
                            <p><strong>보증금:</strong> {selectedReservation.deposit}</p>
                            <p><strong>상태:</strong> {
                                ({
                                    1: '예약대기',
                                    2: '배정대기',
                                    3: '배정완료',
                                    4: '처리중',
                                    5: '처리완료',
                                    9: '취소',
                                })[selectedReservation.state] || '알 수 없음'
                            }</p>
                        </div>
                    )}
                </Modal>
            </>
        );
    }

    return (
        <Table
            columns={columns}
            dataSource={reservations}
            rowKey="res_no"
            pagination={{
                pageSize: 10,
                className: 'centered-pagination',
            }}
            scroll={{ x: 'max-content' }}
            size="small"
        />
    );
};

export default ReservationTable;