import React, { useState, useEffect, useRef } from "react";
import {AutoComplete, List, Spin, Button, message, Input} from "antd";
import axios from "axios";
import { StarOutlined, StarFilled, ReloadOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce"; // lodash/debounce로 수정
import styles from "../css/MySearch.module.css";
import Myloca from "./Myloca.jsx";

const MySearch = ({ onToggleFavorite, favorites }) => {
    const key = "one_key";

    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]); // 검색어 추천 옵션
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
            searchRef.current.focus();
        }
    }, []);

    // 검색 API 호출 함수
    const fetchSuggestions = async (value) => {
        if (value.trim() === "") {
            setOptions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://businfo.daegu.go.kr:8095/dbms_web_api/bs/search?searchText=${value}&wincId=`
            );
            if (response.data.header.success) {
                // 입력값이 포함된 정류장 이름만 필터링
                const filteredResults = response.data.body.filter((item) =>
                    item.bsNm.toLowerCase().includes(value.toLowerCase())
                );

                // 중복 제거 (bsId 기준)
                const uniqueResults = Array.from(
                    new Map(filteredResults.map((item) => [item.bsId, item])).values()
                );

                const suggestions = uniqueResults.map((item) => ({
                    value: item.bsId, // 고유한 bsId를 value로 사용 -> Keys should be unique 해결
                    label: (
                        <div>
                            <div>{item.bsNm}</div>
                            <div style={{ fontSize: "12px", color: "#888" }}>
                                정류장 ID: {item.bsId}
                            </div>
                        </div>
                    ),
                    data: item,
                }));
                setOptions(suggestions);
            } else {
                setOptions([]);
            }
        } catch (error) {
            console.error("검색어 추천 실패:", error);
            message.error({
                content: "검색어 추천에 실패했습니다.",
                key,
                duration: 2,
            });
        } finally {
            setIsLoading(false);
        }
    };

    // 디바운싱된 검색 함수
    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    // AutoComplete의 onSearch 핸들러
    const handleSearch = (value) => {
        setSearchValue(value);
        debouncedFetchSuggestions(value);
    };

    // AutoComplete의 onSelect 핸들러
    const handleSelect = (value, option) => {
        setSearchValue(option.data.bsNm); // 선택된 정류장 이름으로 설정
        setSearchResults([option.data]); // 선택된 정류장만 결과로 표시
        setIsSearched(true);
        setShowNoResults(false);
    };

    // 기존 검색 버튼 클릭 시 동작
    const handleSearchButton = (value) => {
        if (value.trim() === "") {
            setSearchResults([]);
            setIsSearched(false);
            setIsLoading(false);
            setShowNoResults(false);
            setOptions([]);
            return;
        }

        setIsSearched(true);
        setIsLoading(true);
        setShowNoResults(false);

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
                message.error({
                    content: "정류장 검색에 실패했습니다.",
                    key,
                    duration: 2,
                });
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
        setOptions([]);
        if (searchRef.current) {
            searchRef.current.focus();
        }
    };

    const handleToggleFavorite = (item) => {
        const isFavorite = favorites.some((fav) => fav.bsId === item.bsId);
        onToggleFavorite(item);
        message.success({
            content: isFavorite
                ? "나의 버스에서 제거되었습니다."
                : "나의 버스에서 추가되었습니다.",
            key,
            duration: 2,
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>나의 버스 등록</h3>
            <div className={styles.searchWrapper}>
                <AutoComplete
                    ref={searchRef}
                    options={options}
                    onSearch={handleSearch}
                    onSelect={handleSelect}
                    value={searchValue}
                    onChange={setSearchValue}
                    className={styles.searchInput}
                    placeholder="정류장 검색"
                >
                    <Input.Search
                        enterButton="검색"
                        size="large"
                        onSearch={handleSearchButton}
                    />
                </AutoComplete>
                {isSearched && (
                    <Button
                        icon={<ReloadOutlined />}
                        onClick={handleReset}
                        size="large"
                        className={styles.resetButton}
                    />
                )}
            </div>
            {isSearched && (
                <div className={styles.resultsWrapper}>
                    {isLoading ? (
                        <div className={styles.loading}>
                            <Spin tip="Loading..." fullscreen />
                        </div>
                    ) : showNoResults ? (
                        <div className={styles.noResults}>
                            <p>검색 결과가 없습니다.</p>
                        </div>
                    ) : (
                        <div>
                            <List
                                bordered
                                dataSource={searchResults}
                                renderItem={(item) => (
                                    <List.Item
                                        key={item.bsId} // 고유한 key 추가
                                        actions={[
                                            <Myloca stop={item}></Myloca>,
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleToggleFavorite(item);
                                                }}
                                                className={styles.favoriteIcon}
                                            >
                        {favorites.some((fav) => fav.bsId === item.bsId) ? (
                            <StarFilled style={{ color: "#fadb14" }} />
                        ) : (
                            <StarOutlined />
                        )}
                      </span>,
                                        ]}
                                        className={styles.listItem}
                                    >
                                        <div className={styles.listItemContent}>
                                            <div className={styles.stopName} title={item.bsNm}>
                                                {item.bsNm}
                                            </div>
                                            <div className={styles.stopId} title={`정류장 ID: ${item.bsId}`}>
                                                정류장 ID: {item.bsId}
                                            </div>
                                            <div className={styles.routeList} title={`경유 노선: ${item.routeList}`}>
                                                경유 노선: {item.routeList}
                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                                className={styles.list}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MySearch;