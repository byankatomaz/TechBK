import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
}
const Api = axios.create({
  baseURL:"10.109.71.7:8080/api/v1/",
  headers: headers
})
export default Api