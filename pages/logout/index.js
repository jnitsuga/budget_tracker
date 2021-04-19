import {  useEffect, Fragment } from 'react'
import Router from 'next/router'
import View from '../../components/View'

export default () => {
  
    return (
        <View title="Logout">
            <h5 className="text-center">Logging out...</h5>
            <h6 className="text-center">You will be redirected back to the login page shortly.</h6>   
        </View>
       
    )
}
