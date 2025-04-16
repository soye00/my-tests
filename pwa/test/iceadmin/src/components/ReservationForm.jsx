import React, { useEffect } from 'react';
import { Form, Input, Select, Button, DatePicker, InputNumber } from 'antd';
import dayjs from 'dayjs';
import { supabase } from '../services/supabase';

const { Option } = Select;
const { TextArea } = Input;

const ReservationForm = ({ reservation, onSuccess }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (reservation) {
            form.setFieldsValue({
                ...reservation,
                date: reservation.date ? dayjs(reservation.date) : null,
            });
        } else {
            form.resetFields();
        }
    }, [reservation, form]);

    const onFinish = async (values) => {
        try {
            const data = {
                ...values,
                date: values.date ? values.date.toISOString() : dayjs().toISOString(),
            };

            if (reservation) {
                const { error } = await supabase
                    .from('ice_res')
                    .update(data)
                    .eq('res_no', reservation.res_no);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('ice_res').insert([data]);
                if (error) throw error;
            }
            form.resetFields();
            onSuccess();
        } catch (error) {
            console.error('Error saving reservation:', error.message);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ state: 0 }}
        >
            <Form.Item
                name="name"
                label="이름"
                rules={[{ required: true, message: '이름을 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="tel"
                label="연락처"
                rules={[{ required: true, message: '연락처를 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="이메일"
                rules={[{ required: true, message: '이메일을 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="addr"
                label="주소"
                rules={[{ required: true, message: '주소를 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="date"
                label="예약일시"
                rules={[{ required: true, message: '예약일시를 선택해주세요' }]}
            >
                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </Form.Item>
            <Form.Item
                name="time"
                label="시간"
                rules={[{ required: true, message: '시간을 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="model"
                label="모델"
                rules={[{ required: true, message: '모델을 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="capacity"
                label="용량"
                rules={[{ required: true, message: '용량을 입력해주세요' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="service" label="서비스">
                <Select>
                    <Option value="청소">청소</Option>
                    <Option value="수리">수리</Option>
                </Select>
            </Form.Item>
            <Form.Item name="cycle" label="주기">
                <Select>
                    <Option value="1개월">1개월</Option>
                    <Option value="3개월">3개월</Option>
                    <Option value="6개월">6개월</Option>
                    <Option value="없음">없음</Option>
                </Select>
            </Form.Item>
            <Form.Item name="add" label="추가사항">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="remark" label="비고">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="deposit" label="보증금">
                <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="state" label="상태">
                <Select>
                    <Option value={0}>예약대기</Option>
                    <Option value={1}>예약완료</Option>
                    <Option value={2}>기사배정중</Option>
                    <Option value={3}>기사배정완료</Option>
                    <Option value={4}>청소완료</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {reservation ? '수정' : '등록'}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ReservationForm;