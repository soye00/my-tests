import React, { useState } from 'react';
import { Input, Select, Button, Flex } from 'antd';

const { Option } = Select;

const SearchFilters = ({ filters, setFilters, onSearch }) => {
    const [tempFilters, setTempFilters] = useState(filters); // 임시 상태로 입력값 저장

    const handleInputChange = (field, value) => {
        setTempFilters({
            ...tempFilters,
            [field]: value,
        });
    };

    const handleSearch = () => {
        setFilters(tempFilters); // 조회 버튼 클릭 시 필터 적용
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
            </Select>
            <Button type="primary" onClick={handleSearch}>
                조회
            </Button>
        </Flex>
    );
};

export default SearchFilters;