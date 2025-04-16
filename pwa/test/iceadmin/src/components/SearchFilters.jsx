import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const SearchFilters = ({ filters, setFilters }) => {
    const handleChange = (name, value) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFilters({
            name: '',
            tel: '',
            email: '',
            addr: '',
            state: null,
        });
    };

    return (
        <Form layout="inline" style={{ marginBottom: 16 }}>
            <Form.Item>
                <Input
                    placeholder="이름"
                    value={filters.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder="연락처"
                    value={filters.tel}
                    onChange={(e) => handleChange('tel', e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder="이메일"
                    value={filters.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder="주소"
                    value={filters.addr}
                    onChange={(e) => handleChange('addr', e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Select
                    placeholder="예약 상태"
                    value={filters.state}
                    onChange={(value) => handleChange('state', value)}
                    style={{ width: 150 }}
                    allowClear
                >
                    <Option value={0}>예약대기</Option>
                    <Option value={1}>예약완료</Option>
                    <Option value={2}>기사배정중</Option>
                    <Option value={3}>기사배정완료</Option>
                    <Option value={4}>청소완료</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button onClick={handleReset}>초기화</Button>
            </Form.Item>
        </Form>
    );
};

export default SearchFilters;