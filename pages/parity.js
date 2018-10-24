import { Component } from 'react'
import { Row, Col } from 'antd'
import { Input, InputNumber, Select, Button, Menu, Icon, Popconfirm, message, Affix } from 'antd'
import '../assets/css/style.css'

const ButtonGroup = Button.Group;
const Option = Select.Option;
const InputGroup = Input.Group;

function onChange(value) {
    console.log('changed', value);
}
export default class extends Component {
    state = {
        affixtop : 10,
        menukey: 'parity',
    }    
    
    menuClick = (e) => {
        // console.log('click ', e);
    }
    add = (e) => {
        message.success('A new box added');
    }
    confirm = () => {
        message.success('Okay. will delete it');
    }
    render() {        
        return (
            <div style={{padding:10}}>
                <Row>
                    <Affix offsetTop={this.state.affixtop}>
                        <Menu
                            selectedKeys={[this.state.menukey]}
                            mode="horizontal"
                            theme='dark'>
                            <Menu.Item key="exchange">
                                <a href="/index">
                                    <Icon type="appstore" />Exchange
                                </a>
                            </Menu.Item>                        
                            <Menu.Item key="currency">
                                <a href="/currency">
                                    <Icon type="property-safety" />Currency
                                </a>
                            </Menu.Item>                        
                            <Menu.Item key="parity">
                                <a href="/parity">
                                    <Icon type="stock" />Parity
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Affix>
                </Row>
                <Row style={{marginTop:10,marginBottom:5}}>
                    <Col span={24}>
                        <div style={{background:'#FFF'}}>
                            <Row style={{paddingBottom:3}}>
                                <Col span={6} style={{height:'100%',borderRight:'solid #EEE 1px'}}>
                                    <Row>
                                        <Col span={24}>
                                            <ButtonGroup style={{margin:'3px 0 0 3px'}}>
                                                <Button icon="plus" onClick={this.add} />
                                                <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={this.confirm} okText="Yes" cancelText="No">
                                                    <Button icon="minus" />
                                                </Popconfirm>
                                            </ButtonGroup>
                                            <Input style={{width:'48.9%',float:'right',marginTop:3,marginRight:3}} />
                                        </Col>
                                    </Row>
                                    <Row style={{borderTop:'solid #EEE 1px',padding:'3px 3px 0 3px',marginTop:3}}>
                                        <Col span={24}style={{}}>
                                            <InputGroup compact style={{width:'100%'}}>
                                                <Select defaultValue="trk" style={{width:'50%'}}>
                                                    <Option value="btc">BINANCE</Option>
                                                    <Option value="trk">BTCTURK</Option>
                                                </Select>
                                                <Select defaultValue="btc" style={{width:'50%'}}>
                                                    <Option value="btc">BINANCE</Option>
                                                    <Option value="trk">BTCTURK</Option>
                                                </Select>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={24}>
                                            <InputGroup compact style={{width:'100%'}}>
                                                <Select size='small' defaultValue="buy" style={{width:'33.333%'}}>
                                                    <Option value="sell">sell</Option>
                                                    <Option value="buy">buy</Option>
                                                </Select>
                                                <Select size='small' defaultValue="btc" style={{width:'33.333%'}}>
                                                    <Option value="btc">BINANCE</Option>
                                                    <Option value="trk">BTCTURK</Option>
                                                </Select>
                                                <Select size='small' defaultValue="parity_1" style={{width:'33.333%'}}>
                                                    <Option value="parity_1">BTC/TRY</Option>
                                                    <Option value="parity_2">BTC/USDT</Option>
                                                    <Option value="parity_3">ETH/TRY</Option>
                                                    <Option value="parity_4">LTC/TRY</Option>
                                                    <Option value="parity_5">XRP/TRY</Option>
                                                    <Option value="parity_6">USDT/TRY</Option>
                                                </Select>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={24}>
                                            <InputGroup compact style={{width:'100%'}}>
                                                <Select size='small' defaultValue="buy" style={{width:'33.333%'}}>
                                                    <Option value="sell">sell</Option>
                                                    <Option value="buy">buy</Option>
                                                </Select>
                                                <Select size='small' defaultValue="btc" style={{width:'33.333%'}}>
                                                    <Option value="btc">BINANCE</Option>
                                                    <Option value="trk">BTCTURK</Option>
                                                </Select>
                                                <Select size='small' defaultValue="parity_1" style={{width:'33.333%'}}>
                                                    <Option value="parity_1">BTC/TRY</Option>
                                                    <Option value="parity_2">BTC/USDT</Option>
                                                    <Option value="parity_3">ETH/TRY</Option>
                                                    <Option value="parity_4">LTC/TRY</Option>
                                                    <Option value="parity_5">XRP/TRY</Option>
                                                    <Option value="parity_6">USDT/TRY</Option>
                                                </Select>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={24}>
                                            <InputGroup compact style={{width:'100%'}}>
                                                <Select size='small' defaultValue="buy" style={{width:'33.333%'}}>
                                                    <Option value="sell">sell</Option>
                                                    <Option value="buy">buy</Option>
                                                </Select>
                                                <Select size='small' defaultValue="btc" style={{width:'33.333%'}}>
                                                    <Option value="btc">BINANCE</Option>
                                                    <Option value="trk">BTCTURK</Option>
                                                </Select>
                                                <Select size='small' defaultValue="parity_1" style={{width:'33.333%'}}>
                                                    <Option value="parity_1">BTC/TRY</Option>
                                                    <Option value="parity_2">BTC/USDT</Option>
                                                    <Option value="parity_3">ETH/TRY</Option>
                                                    <Option value="parity_4">LTC/TRY</Option>
                                                    <Option value="parity_5">XRP/TRY</Option>
                                                    <Option value="parity_6">USDT/TRY</Option>
                                                </Select>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={16}>
                                            <InputNumber
                                                size='small'
                                                defaultValue={1000}
                                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                style={{width:'100%'}}
                                                onChange={onChange}
                                            />                                            
                                        </Col>
                                        <Col span={8} style={{textAlign:'center'}}>
                                            12$
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={16} style={{textAlign:'center'}}>
                                            market
                                        </Col>
                                        <Col span={8}>
                                            <Select size='small' defaultValue="parity_1" style={{width:'100%'}}>
                                                <Option value="parity_1">BTC/TRY</Option>
                                                <Option value="parity_2">BTC/USDT</Option>
                                                <Option value="parity_3">ETH/TRY</Option>
                                                <Option value="parity_4">LTC/TRY</Option>
                                                <Option value="parity_5">XRP/TRY</Option>
                                                <Option value="parity_6">USDT/TRY</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={16} style={{textAlign:'center'}}>
                                            auto
                                        </Col>
                                        <Col span={8}>
                                            <Select size='small' defaultValue="parity_1" style={{width:'100%'}}>
                                                <Option value="parity_1">BTC/TRY</Option>
                                                <Option value="parity_2">BTC/USDT</Option>
                                                <Option value="parity_3">ETH/TRY</Option>
                                                <Option value="parity_4">LTC/TRY</Option>
                                                <Option value="parity_5">XRP/TRY</Option>
                                                <Option value="parity_6">USDT/TRY</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={16} style={{textAlign:'center'}}>
                                            inventory
                                        </Col>
                                        <Col span={8}>
                                            <Select size='small' defaultValue="parity_1" style={{width:'100%'}}>
                                                <Option value="parity_1">BTC/TRY</Option>
                                                <Option value="parity_2">BTC/USDT</Option>
                                                <Option value="parity_3">ETH/TRY</Option>
                                                <Option value="parity_4">LTC/TRY</Option>
                                                <Option value="parity_5">XRP/TRY</Option>
                                                <Option value="parity_6">USDT/TRY</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row style={{padding:'3px 3px 0 3px'}}>
                                        <Col span={16} style={{textAlign:'center'}}>
                                            withdraw
                                        </Col>
                                        <Col span={8}>
                                            <Select size='small' defaultValue="parity_1" style={{width:'100%'}}>
                                                <Option value="parity_1">BTC/TRY</Option>
                                                <Option value="parity_2">BTC/USDT</Option>
                                                <Option value="parity_3">ETH/TRY</Option>
                                                <Option value="parity_4">LTC/TRY</Option>
                                                <Option value="parity_5">XRP/TRY</Option>
                                                <Option value="parity_6">USDT/TRY</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={18} style={{height:'100%',borderRight:'solid #EEE 1px',textAlign:'center',paddingTop:'60px'}}>
                                    <h2>PARITY PROFIT GRAPH</h2>
                                    <h2>calculated for 1000$</h2>

                                    <h4>It will be the Bar-Char here!</h4>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}