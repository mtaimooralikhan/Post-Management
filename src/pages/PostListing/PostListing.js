import React, { useEffect, useState } from "react";
import { Row, Menu, Dropdown, Button, Col, Spin, Input, message } from "antd";
import "antd/dist/antd.css";
import HomeCategoryCard from "../../components/HomeCategoryCard/HomeCategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { viewPost } from "../../redux/actions";
import PostItem from "./PostItem/PostItem";
export default function PostListing() {
  const { Search } = Input;
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.getpostsReducer.posts);
  const loading = useSelector((state) => state.getpostsReducer.loading);
  const error = useSelector((state) => state.getpostsReducer.error);

  const successDelete = useSelector((state) => state.deletePostReducer.success);

  console.log("successDelete: ", successDelete);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    searchPosts();
  }, [search]);

  const searchPosts = () => {
    dispatch(
      viewPost({
        search,
      })
    );
  };
  useEffect(() => {
    console.log("delelele");
    if (successDelete) {
      message.success("Post Deleted Successfully");
    }
  }, [successDelete]);

  const onSearch = (value) => {
    if (value) {
      setSearch(value);
    } else {
      setSearch(null);
    }
  };
  console.log("posts: ", posts);
  if (posts.length !== 0) {
    return (
      <div>
        <HomeCategoryCard
          title={"Posts"}
          searchBar={
            <Search
              placeholder="Search"
              allowClear
              onSearch={(val) => onSearch(val)}
              size="large"
            />
          }
          items={
            <Row style={{ width: "100%" }}>
              {loading ? (
                <div className={"bids-spin"}>
                  <Spin />
                </div>
              ) : posts.length > 1 ? (
                posts.map((item) => {
                  return (
                    <PostItem
                      id={item.id}
                      userId={item.userId}
                      title={item.title}
                      bosdy={item.body}
                    />
                  );
                })
              ) : (
                <PostItem
                  id={posts.id}
                  userId={posts.userId}
                  title={posts.title}
                  bosdy={posts.body}
                />
              )}
            </Row>
          }
        ></HomeCategoryCard>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin />
      </div>
    );
  }
}
