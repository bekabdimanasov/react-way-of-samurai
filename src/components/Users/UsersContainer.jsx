import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from 'axios'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

// Class Container Component
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}


            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}/>
        </>
    }
}


// (Container Component) Work with store (redux) => states, dispatch, action, reducers

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageAC(pageNumber);
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            let action = setTotalUsersCountAC(totalCount);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = setIsFetchingAC(isFetching);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);