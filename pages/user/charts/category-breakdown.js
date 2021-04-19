import { useState } from 'react'
import { InputGroup, Form, Col } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import View from '../../../components/View'



export default () => {
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [labelsArr, setLabelsArr] = useState([])
    const [dataArr, setDataArr] = useState([])
    const [bgColors,setBgColors] = useState([])

  

    return (
        <View title="Category Breakdown">
            <h3>Category Breakdown</h3>
            <Form.Row>
                <Form.Group as={ Col } xs="6">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" value={ fromDate } onChange={ (e) => setFromDate(e.target.value) }/>
                </Form.Group>
                <Form.Group as={ Col } xs="6">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" value={ toDate } onChange={ (e) => setToDate(e.target.value) }/>
                </Form.Group>
            </Form.Row>
            <hr/>
            <Pie height="100"/>
        </View>
    )
}

