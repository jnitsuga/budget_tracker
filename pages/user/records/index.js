import { useState, Fragment } from 'react'
import { Card, Button, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import Link from 'next/link'
import View from '../../../components/View'

export default () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchType, setSearchType] = useState("All")

    return (
        <View title="Records">
            <h3>Records</h3>
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <Link href="/user/records/new"><a className="btn btn-success">Add</a></Link>
                </InputGroup.Prepend>
                <FormControl placeholder="Search Record" value={ searchKeyword } onChange={ (e) => setSearchKeyword(e.target.value) }/>
                <Form.Control as="select" defaultValue={ searchType } onChange={ (e) => setSearchType(e.target.value) }>
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Form.Control>
            </InputGroup>
            <RecordsView searchKeyword={ searchKeyword } searchType={ searchType }/>
        </View>
    )
}

const RecordsView = () => {
    const [records, setRecords] = useState([])

       
    return (
        <Fragment>
            {
                records.map((record) => {
                    const textColor = (record.type === 'Income') ? 'text-success' : 'text-danger'
                    const amountSymbol = (record.type === 'Income') ? '+' : '-'

                    return (
                        <Card className="mb-3" key={ record._id }>
                            <Card.Body>
                                <Row>
                                    <Col xs={ 6 }>
                                        <h5>{ record.description }</h5>
                                        <h6><span className={ textColor }>{ record.type }</span> { ' (' + record.categoryName + ')' }</h6>
                                        <p>{ moment(record.dateAdded).format("MMMM D, YYYY") }</p>
                                    </Col>
                                    <Col xs={ 6 } className="text-right">
                                        <h6 className={ textColor }>{ amountSymbol + ' ' + record.amount.toLocaleString() }</h6>
                                        <span className={ textColor }>{ record.balanceAfterTransaction.toLocaleString() }</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}




