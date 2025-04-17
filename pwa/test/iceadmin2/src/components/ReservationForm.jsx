import React, { useEffect } from 'react';
import { Form, Input, Select, Button, DatePicker, Radio, InputNumber } from 'antd';
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
            initialValues={{ state: 0, time: '오전 10시 ~ 오후 1시', capacity: '1', service: '청소', cycle: '이번 한 번만', add: '선택 안함' }}
        >
            <Form.Item
                name="name"
                label="이름"
                rules={[{ required: true, message: '이름을 입력해주세요' }]}
            >
                <Input placeholder="이름을 입력하세요" />
            </Form.Item>
            <Form.Item
                name="tel"
                label="연락처"
                rules={[{ required: true, message: '연락처를 입력해주세요' }]}
            >
                <Input
                    placeholder="010-1234-5678"
                    maxLength={13}
                    onChange={(e) => {
                        const value = e.target.value;
                        const formatted = value
                            .replace(/[^0-9]/g, '')
                            .replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1-$2-$3')
                            .replace(/-+$/, '');
                        form.setFieldsValue({ tel: formatted });
                    }}
                />
            </Form.Item>
            <Form.Item
                name="email"
                label="이메일"
                rules={[{ required: true, message: '이메일을 입력해주세요', type: 'email' }]}
            >
                <Input placeholder="example@domain.com" />
            </Form.Item>
            <Form.Item
                name="addr"
                label="주소"
                rules={[{ required: true, message: '주소를 입력해주세요' }]}
            >
                <Input placeholder="주소를 입력하세요" />
            </Form.Item>
            <Form.Item
                name="detailAddress"
                label="상세주소"
            >
                <Input placeholder="상세주소를 입력하세요" />
            </Form.Item>
            <Form.Item
                name="date"
                label="예약일시"
                rules={[{ required: true, message: '예약일시를 선택해주세요' }]}
            >
                <DatePicker
                    format="YYYY-MM-DD"
                    disabledDate={(current) => current && current < dayjs().startOf('day')}
                    style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item
                name="time"
                label="예약 시간"
                rules={[{ required: true, message: '예약 시간을 선택해주세요' }]}
            >
                <Radio.Group>
                    <Radio value="오전 10시 ~ 오후 1시">오전 10시 ~ 오후 1시</Radio>
                    <Radio value="오후 2시 ~ 오후 5시">오후 2시 ~ 오후 5시</Radio>
                    <Radio value="오후 4시 ~ 오후 7시">오후 4시 ~ 오후 7시</Radio>
                    <Radio value="오후 6시 ~ 오후 9시">오후 6시 ~ 오후 9시</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="model"
                label="모델"
                rules={[{ required: true, message: '모델을 입력해주세요' }]}
            >
                <Input placeholder="브랜드명 / 모델번호" />
            </Form.Item>
            <Form.Item
                name="capacity"
                label="용량"
                rules={[{ required: true, message: '용량을 선택해주세요' }]}
            >
                <Radio.Group>
                    <Radio value="1">20~50kg</Radio>
                    <Radio value="2">50~100kg</Radio>
                    <Radio value="3">100kg 이상</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="service"
                label="서비스"
                rules={[{ required: true, message: '서비스를 선택해주세요' }]}
            >
                <Radio.Group>
                    <Radio value="청소">청소</Radio>
                    <Radio value="수리">수리</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="cycle"
                label="주기"
                rules={[{ required: true, message: '주기를 선택해주세요' }]}
            >
                <Radio.Group>
                    <Radio value="이번 한 번만">이번 한 번만</Radio>
                    <Radio value="한 달에 한 번">한 달에 한 번</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="add"
                label="추가사항"
                rules={[{ required: true, message: '추가사항을 선택해주세요' }]}
            >
                <Radio.Group>
                    <Radio value="심화 청소">심화 청소</Radio>
                    <Radio value="물탱크 청소">물탱크 청소</Radio>
                    <Radio value="필터 교체">필터 교체</Radio>
                    <Radio value="선택 안함">선택 안함</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="remark"
                label="비고"
            >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item
                name="deposit"
                label="보증금"
            >
                <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="state"
                label="상태"
                rules={[{ required: true, message: '상태를 선택해주세요' }]}
            >
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