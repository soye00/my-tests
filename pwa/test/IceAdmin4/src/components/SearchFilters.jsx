import React, { useState } from 'react';
import { Input, Select, Button, Flex } from 'antd';

const { Option } = Select;

const SearchFilters = ({ filters, setFilters, onSearch }) => {
    const [tempFilters, setTempFilters] = useState(filters);

    const handleInputChange = (field, value) => {
        setTempFilters({
            ...tempFilters,
            [field]: value,
        });
    };

    const handleSearch = () => {
        setFilters({
            ...tempFilters,
            state: tempFilters.state !== undefined ? Number(tempFilters.state) : null,
        });
        onSearch();
    };

    const handleReset = () => {
        const resetFilters = {
            name: '',
            tel: '',
            email: '',
            addr: '',
            state: null,
        };
        setTempFilters(resetFilters);
        setFilters(resetFilters);
        onSearch();
    };

    return (
        <Flex wrap="wrap" gap="middle" style={{ marginBottom: 16 }}>
            <Input
                placeholder="이름"
                value={tempFilters.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{ width: 200 }}
            />
            <Input
                placeholder="연락처"
                value={tempFilters.tel}
                onChange={(e) => handleInputChange('tel', e.target.value)}
                style={{ width: 200 }}
            />
            <Input
                placeholder="이메일"
                value={tempFilters.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{ width: 200 }}
            />
            <Input
                placeholder="주소"
                value={tempFilters.addr}
                onChange={(e) => handleInputChange('addr', e.target.value)}
                style={{ width: 200 }}
            />
            <Select
                placeholder="상태"
                value={tempFilters.state}
                onChange={(value) => handleInputChange('state', value)}
                style={{ width: 200 }}
                allowClear
            >
                <Option value={1}>예약대기</Option>
                <Option value={2}>배정대기</Option>
                <Option value={3}>배정완료</Option>
                <Option value={4}>처리중</Option>
                <Option value={5}>처리완료</Option>
                <Option value={9}>예약취소</Option>
            </Select>
            <Button type="primary" onClick={handleSearch}>
                조회
            </Button>
            <Button onClick={handleReset}>
                초기화
            </Button>
        </Flex>
    );
};

export default SearchFilters;