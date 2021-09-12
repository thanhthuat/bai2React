import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserList from '../../components/UserList';
import { getUser } from '../../store/actions/users';
import Header from '../../components/Header';
import PaginationButton from '../../components/PaginationButton';

export default function Home(props) {
  const dispatch = useDispatch();
  const [isPageNumber,setPageNumber] = useState(1);
  useEffect(() => {
    dispatch(getUser(isPageNumber));
  }, [isPageNumber]);
  const signOut =()=>{
    props.history.push("/signin");
  }
  return (
    <div>
        <Header signOut={signOut} />
        <UserList /> 
        <PaginationButton isPageNumber={isPageNumber} setPageNumber={setPageNumber} />
    </div>

  );
}