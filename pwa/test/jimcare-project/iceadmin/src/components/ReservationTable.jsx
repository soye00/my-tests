import React from 'react';
import { Table, Button, Popconfirm, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';

const ReservationTable = ({ reservations, onEdit, onDelete }) => {
    // 화면 크기 감지 (모바일: 768px 이하)
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // 테이블 컬럼 정의
    const columns = [
        {
            title: '예약번호',
            dataIndex: 'res_no',
            key: 'res_no',
            width: 100,
            responsive: ['xs', 'sm', 'md', 'lg'], // 모든 화면 크기에서 표시
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
            responsive: ['md', 'lg'], // 중간 이상 화면에서만 표시
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
            responsive: ['lg'], // 큰 화면에서만 표시
        },
        {
            title: '예약 날짜',
            dataIndex: 'date',
            key: 'date',
            width: 120,
            render: (text) => dayjs(text).format('YYYY-MM-DD'), // 시간 제외
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
        {
            title: '시간',
            dataIndex: 'time',
            key: 'time',
            width: 100,
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
            width: 100,
            responsive: ['lg'],
        },
        {
            title: '서비스',
            dataIndex: 'service',
            key: 'service',
            width: 100,
            responsive: ['md', 'lg'],
        },
        {
            title: '주기',
            dataIndex: 'cycle',
            key: 'cycle',
            width: 100,
            responsive: ['lg'],
        },
        {
            title: '추가사항',
            dataIndex: 'add',
            key: 'add',
            width: 200,
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
            render: (state) => {
                const states = {
                    0: '예약대기',
                    1: '예약완료',
                    2: '기사배정중',
                    3: '기사배정완료',
                    4: '청소완료',
                };
                return states[state] || '알 수 없음';
            },
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
                        title="정말 삭제하시겠습니까?"
                        onConfirm={() => onDelete(record.res_no)}
                    >
                        <Button icon={<DeleteOutlined />} danger size={isMobile ? 'small' : 'middle'} />
                    </Popconfirm>
                </>
            ),
            responsive: ['xs', 'sm', 'md', 'lg'],
        },
    ];

    // 모바일 화면에서는 카드형 레이아웃
    if (isMobile) {
        return (
            <div style={{ padding: '0 8px' }}>
                {reservations.map((record) => (
                    <Card
                        key={record.res_no}
                        style={{ marginBottom: 16, borderRadius: 8 }}
                        title={`예약번호: ${record.res_no}`}
                        extra={
                            <div>
                                <Button
                                    icon={<EditOutlined />}
                                    onClick={() => onEdit(record)}
                                    style={{ marginRight: 8 }}
                                    size="small"
                                />
                                <Popconfirm
                                    title="정말 삭제하시겠습니까?"
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
                                0: '예약대기',
                                1: '예약완료',
                                2: '기사배정중',
                                3: '기사배정완료',
                                4: '청소완료',
                            })[record.state] || '알 수 없음'
                        }</p>
                        {/* 추가 정보는 필요 시 확장 가능 */}
                    </Card>
                ))}
            </div>
        );
    }

    // 데스크톱 화면에서는 테이블
    return (
        <Table
            columns={columns}
            dataSource={reservations}
            rowKey="res_no"
            pagination={{
                pageSize: 10,
                style: { textAlign: 'center' },
            }}
            scroll={{ x: 'max-content' }} // 동적 스크롤
            size="small" // 컴팩트한 테이블
        />
    );
};

export default ReservationTable;