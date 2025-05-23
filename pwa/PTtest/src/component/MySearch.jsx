import React, { useState, useEffect, useRef } from "react";
import { Input, List, Spin, Button, message } from "antd";
import axios from "axios";
import { StarOutlined, StarFilled, ReloadOutlined } from "@ant-design/icons";

const { Search } = Input;

const MySearch = ({ onSelectStop, onToggleFavorite, favorites }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        if (!isLoading && isSearched) {
            const timer = setTimeout(() => {
                setShowNoResults(searchResults.length === 0);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading, isSearched, searchResults]);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.input.focus();
        }
    }, []);

    const handleSearch = (value) => {
        if (value.trim() === "") {
            setSearchResults([]);
            setIsSearched(false);
            setIsLoading(false);
            setShowNoResults(false);
            setIsExpanded(false);
            return;
        }

        setIsSearched(true);
        setIsLoading(true);
        setShowNoResults(false);
        setIsExpanded(false);

        axios
            .get(
                `https://businfo.daegu.go.kr:8095/dbms_web_api/bs/search?searchText=${value}&wincId=`
            )
            .then((response) => {
                if (response.data.header.success) {
                    setSearchResults(response.data.body);
                } else {
                    setSearchResults([]);
                }
            })
            .catch((error) => {
                console.error("정류장 검색 실패:", error);
                message.error("정류장 검색에 실패했습니다.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleReset = () => {
        setSearchResults([]);
        setIsSearched(false);
        setIsLoading(false);
        setShowNoResults(false);
        setSearchValue("");
        setIsExpanded(false);
        if (searchRef.current) {
            searchRef.current.input.focus();
        }
    };

    const handleToggleFavorite = (item) => {
        const isFavorite = favorites.some((fav) => fav.bsId === item.bsId);
        onToggleFavorite(item);
        message.success(
            isFavorite
                ? "즐겨찾기에서 제거되었습니다."
                : "즐겨찾기에 추가되었습니다."
        );
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedResults = isExpanded ? searchResults : searchResults.slice(0, 5);

    return (
        <div style={{ padding: "1rem", boxSizing: "border-box" }}>
            <h3>대구 버스 정류장 검색</h3>
            <div style={{ marginBottom: "1rem", display: "flex", gap: "8px" }}>
                <Search
                    ref={searchRef}
                    placeholder="정류장 검색"
                    enterButton="검색"
                    size="large"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onSearch={handleSearch}
                    style={{ flex: 1 }}
                />
                {isSearched && (
                    <Button
                        icon={<ReloadOutlined />}
                        onClick={handleReset}
                        size="large"
                    />
                )}
            </div>
            {isSearched && (
                <div style={{ minHeight: "300px" }}>
                    {isLoading ? (
                        <div style={{ textAlign: "center", padding: "1rem", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Spin tip="검색 중..." />
                        </div>
                    ) : showNoResults ? (
                        <div style={{ minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <p>검색 결과가 없습니다.</p>
                        </div>
                    ) : (
                        <div>
                            <List
                                bordered
                                dataSource={displayedResults}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleToggleFavorite(item);
                                                }}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {favorites.some((fav) => fav.bsId === item.bsId) ? (
                                                    <StarFilled style={{ color: "#fadb14" }} />
                                                ) : (
                                                    <StarOutlined />
                                                )}
                                            </span>,
                                        ]}
                                        onClick={() => onSelectStop(item)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <div
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "1.1em",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                {item.bsNm}
                                            </div>
                                            <div
                                                style={{
                                                    color: "#666",
                                                    fontSize: "0.9em",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                정류장 ID: {item.bsId}
                                            </div>
                                            <div style={{ color: "#1890ff", fontSize: "0.9em" }}>
                                                경유 노선: {item.routeList}
                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                                style={{ maxHeight: "250px", overflowY: "auto", marginBottom: "1rem" }}
                            />
                            <div style={{ minHeight: "32px", display: "flex", justifyContent: "center" }}>
                                {searchResults.length > 5 && (
                                    <Button
                                        onClick={toggleExpand}
                                        style={{ width: "150px" }}
                                        type="primary"
                                    >
                                        {isExpanded ? "숨기기" : `더 보기 (${searchResults.length - 5}개)`}
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MySearch;