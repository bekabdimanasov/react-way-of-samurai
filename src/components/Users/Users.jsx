import React from 'react';
import styles from './Users.module.css'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatarfiles.alphacoders.com/214/214234.jpg',
                fullName: 'Dmitriy',
                followed: false,
                status: 'I am so happy',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 2,
                photoUrl: 'https://avatarfiles.alphacoders.com/214/214234.jpg',
                fullName: 'Azamat',
                followed: true,
                status: 'I am so perfect',
                location: {country: 'Kyrgyzstan', city: 'Bishkek'}
            },
            {
                id: 3,
                photoUrl: 'https://avatarfiles.alphacoders.com/214/214234.jpg',
                fullName: 'Ruslan',
                followed: false,
                status: 'I am bad',
                location: {country: 'Kazakhstan', city: 'Almaty'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.photos} src={u.photoUrl}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={ () => {
                                        props.unfollow(u.id)
                                    } }>Unollow</button>
                                    : <button onClick={ () => {
                                        props.follow(u.id)
                                    } }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;