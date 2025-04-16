import React from 'react';
import { Card, Statistic, DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const MiniDashboard = ({ reservations, dateRange, setDateRange }) => {
    const totalReservations = reservations.length;
    const cleaningReservations = reservations.filter(r => r.service === '청소').length;
    const repairReservations = reservations.filter(r => r.service === '수리').length;
    const canceledReservations = reservations.filter(r => r.state === 9).length;

    return (
        <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
                <RangePicker
                    value={dateRange}
                    onChange={(dates) => setDateRange(dates || [dayjs().subtract(1, 'month'), dayjs()])}
                    style={{ width: 300 }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <Card style={{ flex: 1, backgroundColor: '#e6f7ff' }}>
                    <Statistic
                        title="총 예약"
                        value={totalReservations}
                        prefix={<EditOutlined />}
                        valueStyle={{ color: '#1890ff' }}
                    />
                </Card>
                <Card style={{ flex: 1, backgroundColor: '#f6ffed' }}>
                    <Statistic
                        title="청소 예약"
                        value={cleaningReservations}
                        prefix={<EditOutlined />}
                        valueStyle={{ color: '#52c41a' }}
                    />
                </Card>
                <Card style={{ flex: 1, backgroundColor: '#fff7e6' }}>
                    <Statistic
                        title="수리 예약"
                        value={repairReservations}
                        prefix={<EditOutlined />}
                        valueStyle={{ color: '#fa8c16' }}
                    />
                </Card>
                <Card style={{ flex: 1, backgroundColor: '#fff1f0' }}>
                    <Statistic
                        title="취소 예약"
                        value={canceledReservations}
                        prefix={<DeleteOutlined />}
                        valueStyle={{ color: '#ff4d4f' }}
                    />
                </Card>
            </div>
        </div>
    );
};

export default MiniDashboard;