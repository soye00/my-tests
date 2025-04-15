import React, { useEffect } from 'react';
import { Form, Input, Select, Button, DatePicker, Radio, Space } from 'antd';
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

    const openDaumPostcode = () => {
        new window.daum.Postcode({
            oncomplete: (data) => {
                form.setFieldsValue({
                    postcode: data.zonecode,
                    address: data.address,
                });
            },
        }).open();
    };

    const onFinish = async (values) => {
        try {
            const data = {
                ...values,
                date: values.date ? values.date.toISOString() : dayjs().toISOString(),
                addr: `${values.address || ''} ${values.detailAddress || ''}`.trim(),
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
            initialValues={{ state: 1 }}
        >
            <div className="toptxt">
                <h1>아이스케어 <br />제빙기 청소&수리 예약하기</h1>
            </div>

            <div className="r-date">
                <Form.Item
                    label="예약 날짜를 선택하세요"
                    name="date"
                    rules={[{ required: true, message: '예약 날짜를 선택해주세요' }]}
                >
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" />
                </Form.Item>
            </div>

            <div className="r-time">
                <Form.Item
                    label="예약 시간을 선택하세요"
                    name="time"
                    rules={[{ required: true, message: '예약 시간을 선택해주세요' }]}
                >
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value="오전 10시 ~ 오후 1시">오전 10시 ~ 오후 1시</Radio>
                            <Radio value="오후 2시 ~ 오후 5시">오후 2시 ~ 오후 5시</Radio>
                            <Radio value="오후 4시 ~ 오후 7시">오후 4시 ~ 오후 7시</Radio>
                            <Radio value="오후 6시 ~ 오후 9시">오후 6시 ~ 오후 9시</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="r-info">
                <h1>예약자 정보를 입력하세요</h1>
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
                    <Input placeholder="010-1234-5678" maxLength={13} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="이메일"
                    rules={[{ required: true, message: '이메일을 입력해주세요' }]}
                >
                    <Input placeholder="example@domain.com" />
                </Form.Item>
            </div>

            <div className="r-addr">
                <h1>주소를 입력하세요</h1>
                <Form.Item name="postcode" label="우편번호">
                    <Input placeholder="우편번호" readOnly style={{ width: '70%' }} />
                </Form.Item>
                <Button onClick={openDaumPostcode} style={{ marginBottom: 16 }}>
                    🔍 검색
                </Button>
                <Form.Item name="address" label="주소">
                    <Input placeholder="주소" readOnly />
                </Form.Item>
                <Form.Item name="detailAddress" label="상세주소">
                    <Input placeholder="상세주소" />
                </Form.Item>
            </div>

            <div className="r-model">
                <Form.Item name="model" label="제빙기 정보를 알려주세요">
                    <Input placeholder="브랜드명 / 모델번호" />
                </Form.Item>
            </div>

            <div className="r-capacity">
                <Form.Item
                    name="capacity"
                    label="제빙기 용량을 알려주세요"
                    rules={[{ required: true, message: '용량을 선택해주세요' }]}
                >
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value="20~50kg">20~50kg</Radio>
                            <Radio value="50~100kg">50~100kg</Radio>
                            <Radio value="100kg 이상">100kg 이상</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="r-selectServ">
                <Form.Item
                    name="service"
                    label="원하시는 서비스를 선택하세요"
                    rules={[{ required: true, message: '서비스를 선택해주세요' }]}
                >
                    <Radio.Group>
                        <Radio value="청소">청소</Radio>
                        <Radio value="수리">수리</Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="r-selectCyc">
                <Form.Item
                    name="cycle"
                    label="서비스 주기를 선택하세요"
                    rules={[{ required: true, message: '주기를 선택해주세요' }]}
                >
                    <Radio.Group>
                        <Radio value="이번 한 번만">이번 한 번만</Radio>
                        <Radio value="한 달에 한 번">한 달에 한 번 (10 ~ 15% 할인)</Radio>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="r-selectAdd">
                <Form.Item name="add" label="원하시는 추가 서비스를 선택하세요">
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value="심화 청소">심화 청소 (+ 10만 원 ~ 20만 원)</Radio>
                            <Radio value="물탱크 청소">물탱크 청소 (+ 3만 원 ~ 10만 원)</Radio>
                            <Radio value="필터 교체">필터 교체 (+ 2만 원 ~ 10만 원)</Radio>
                            <Radio value="선택 안함">선택 안함</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="r-Special">
                <Form.Item name="remark" label="특별 요청사항을 입력하세요">
                    <TextArea
                        rows={4}
                        placeholder="예) 제빙기 상태나 장소에 대한 설명"
                    />
                </Form.Item>
            </div>

            <Form.Item name="deposit" label="보증금">
                <Input.Number min={0} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="state" label="상태">
                <Select>
                    <Option value={1}>예약대기</Option>
                    <Option value={2}>배정대기</Option>
                    <Option value={3}>배정완료</Option>
                    <Option value={4}>처리중</Option>
                    <Option value={5}>처리완료</Option>
                    <Option value={9}>취소</Option>
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