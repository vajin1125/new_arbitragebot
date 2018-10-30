import { Component } from 'react'
import { Row, Col } from 'antd'
import { Input, InputNumber, AutoComplete, Select, Button, Menu, Icon, Popconfirm, message, Affix, Alert } from 'antd'
import '../assets/css/style.css'
let bizcharts;
if (process.browser) {
  bizcharts = require('bizcharts')
}
import DataSet from "@antv/data-set"
  
const ButtonGroup = Button.Group;
const Option = Select.Option;
const InputGroup = Input.Group;
const SubMenu = Menu.SubMenu;

const autocompletedata = [
    'BTC/TL/USDT',
    'ETH/TL/USDT',
    'LTC/TL/USDT',
    'XRP/TL/USDT',
    'ETH/TL/BTC',
    'LTC/TL/BTC',
    'XRP/TL/BTC',
    'BTG/TL/USDT',
    'ETC/TL/USDT',
    'BCC/TL/USDT',
    'BTG/TL/BTC',
    'ETC/TL/BTC',
    'XEM/TL/BTC',
    'BCC/TL/BTC',
    'DASH/TL/BTC'
]

const Paritybox = (props) => (
    <Row style={{marginBottom:5}}>
        <Col span={24} style={{}}>
            <Row style={{background:'#00395b'}}>
                <Col span={5} style={{height:295,borderRight:'solid #EEE 1px',background:'#FFF'}}>
                    <Row>
                        <Col span={24}>
                            <ButtonGroup style={{margin:'3px 0 0 3px'}}>
                                <Button icon="plus" onClick={props.boxadd} />
                                <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={props.boxremove} okText="Yes" cancelText="No">
                                    <Button icon="minus" />
                                </Popconfirm>
                            </ButtonGroup>
                            {/* <Input style={{width:'48.9%',float:'right',marginTop:3,marginRight:3}} /> */}
                            <AutoComplete
                                dataSource={props.filterdata}
                                style={{ width: 200 }}
                                // onSelect={onSelect}
                                onSearch={props.autocomplete}
                                style={{width:'48.9%',float:'right',marginTop:3,marginRight:3}}
                            />
                        </Col>
                    </Row>
                    <Row style={{borderTop:'solid #EEE 1px',padding:'3px 3px 0 3px',marginTop:3}}>
                        <InputGroup compact>
                            <Select defaultValue="trk" size='small' style={{width:'50%'}}>
                                <Option value="btc">BINANCE</Option>
                                <Option value="trk">BTCTURK</Option>
                            </Select>
                            <Select defaultValue="btc" size='small' style={{width:'50%'}}>
                                <Option value="btc">BINANCE</Option>
                                <Option value="trk">BTCTURK</Option>
                            </Select>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <InputGroup compact>
                            <Select size='small' defaultValue="buy" style={{width:'25%'}}>
                                <Option value="sell">SELL</Option>
                                <Option value="buy">BUY</Option>
                            </Select>
                            <Select size='small' defaultValue="btc" style={{width:'40%'}}>
                                <Option value="btc">BINANCE</Option>
                                <Option value="trk">BTCTURK</Option>
                            </Select>
                            <Select size='small' defaultValue="parity_1" style={{width:'35%'}}>
                                <Option value="parity_1">BTC/TRY</Option>
                                <Option value="parity_2">BTC/USDT</Option>
                                <Option value="parity_3">ETH/TRY</Option>
                                <Option value="parity_4">LTC/TRY</Option>
                                <Option value="parity_5">XRP/TRY</Option>
                                <Option value="parity_6">USDT/TRY</Option>
                            </Select>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <InputGroup compact>
                            <Select size='small' defaultValue="buy" style={{width:'25%'}}>
                                <Option value="sell">SELL</Option>
                                <Option value="buy">BUY</Option>
                            </Select>
                            <Select size='small' defaultValue="btc" style={{width:'40%'}}>
                                <Option value="btc">BINANCE</Option>
                                <Option value="trk">BTCTURK</Option>
                            </Select>
                            <Select size='small' defaultValue="parity_1" style={{width:'35%'}}>
                                <Option value="parity_1">BTC/TRY</Option>
                                <Option value="parity_2">BTC/USDT</Option>
                                <Option value="parity_3">ETH/TRY</Option>
                                <Option value="parity_4">LTC/TRY</Option>
                                <Option value="parity_5">XRP/TRY</Option>
                                <Option value="parity_6">USDT/TRY</Option>
                            </Select>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <InputGroup compact>
                            <Select size='small' defaultValue="buy" style={{width:'25%'}}>
                                <Option value="sell">SELL</Option>
                                <Option value="buy">BUY</Option>
                            </Select>
                            <Select size='small' defaultValue="btc" style={{width:'40%'}}>
                                <Option value="btc">BINANCE</Option>
                                <Option value="trk">BTCTURK</Option>
                            </Select>
                            <Select size='small' defaultValue="parity_1" style={{width:'35%'}}>
                                <Option value="parity_1">BTC/TRY</Option>
                                <Option value="parity_2">BTC/USDT</Option>
                                <Option value="parity_3">ETH/TRY</Option>
                                <Option value="parity_4">LTC/TRY</Option>
                                <Option value="parity_5">XRP/TRY</Option>
                                <Option value="parity_6">USDT/TRY</Option>
                            </Select>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <InputGroup compact>
                            <InputNumber
                                size='small'
                                defaultValue={1000}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                style={{width:'50%'}}
                            />
                            <Button size='small' type='primary' style={{width:'50%'}}>+12</Button>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <InputGroup compact>
                            <Select size='small' defaultValue="market" style={{width:'65%'}}>
                                <Option value="market">MARKET</Option>
                                <Option value="limit">LIMIT</Option>
                            </Select>
                            <Select size='small' defaultValue="standard" style={{width:'35%'}}>
                                <Option value="standard">STD</Option>
                                <Option value="wall">WALL</Option>
                            </Select>
                        </InputGroup>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <Col span={16} style={{textAlign:'center'}}>
                            AUTO
                        </Col>
                        <Col span={8}>
                            <Select size='small' defaultValue="yes" style={{width:'100%'}}>
                                <Option value="yes">YES</Option>
                                <Option value="no">NO</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <Col span={16} style={{textAlign:'center'}}>
                            INVENTORY
                        </Col>
                        <Col span={8}>
                            <Select size='small' defaultValue="yes" style={{width:'100%'}}>
                                <Option value="yes">YES</Option>
                                <Option value="no">NO</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row style={{padding:'3px 3px 0 3px'}}>
                        <Col span={16} style={{textAlign:'center'}}>
                            WITHDRAW
                        </Col>
                        <Col span={8}>
                            <Select size='small' defaultValue="yes" style={{width:'100%'}}>
                                <Option value="yes">YES</Option>
                                <Option value="no">NO</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span={11} style={{height:295,padding:'15px 20px 0 0',background:'#FFF'}}>
                    {process.browser &&
                        <bizcharts.Chart height={275} data={props.dv} forceFit>
                            <bizcharts.Legend />
                            <bizcharts.Axis name="月份" />
                            <bizcharts.Axis name="月均降雨量" />
                            <bizcharts.Tooltip />
                            <bizcharts.Geom
                                type="intervalStack"
                                position="月份*月均降雨量"
                                color={['name', ['lightgreen', 'green', 'pink', 'red']]}
                                style={{
                                stroke: "#fff",
                                lineWidth: 1
                                }}
                            />
                        </bizcharts.Chart>
                    }
                </Col>
                <Col span={4} style={{height:295,paddingTop:5,overflow:'auto',background:'#FFF'}}>
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                    <Alert
                        message="buy-20.03.08-xrp-300 usd"
                        type="info"
                        closable
                        closeText="Cancel"
                        style={{marginBottom:3,paddingTop:5,paddingBottom:5}}
                    />
                </Col>
                <Col span={4} style={{height:295,overflowY:'auto',padding:'0 5px',msScrollbarFaceColor:'red'}}>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>12$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>2$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>10$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>8$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>12$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>12$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>5$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>10$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>11$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>6$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>7$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>9$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>12$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>10$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>11$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>2$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>7$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>8$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>8$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12,background:'#014f7c'}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>6$</span></p>
                    <p style={{padding:0,margin:0,color:'#FFF',fontSize:12}}>20.03.08 15:04:53 buy-xrp-300<span style={{float:'right'}}>10$</span></p>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default class extends Component {
    state = {
        parityboxes: ['a'],
        filterdata: []
    }    
    boxadd = (e) => {
        let T = this.state.parityboxes;
        T.push('a');
        this.setState({
            parityboxes: T
        })
        message.success('A new box created.');
    }
    boxremove = () => {
        let T = this.state.parityboxes;
        if (T.length == 1) {
            message.warning('Sorry. The last box cannot be removed.');
            return;
        }
        T.splice(0, 1);
        this.setState({
            parityboxes: T
        })
        message.success('The selected box removed.');
    }
    autocomplete = (value) => {
        if (value == '')
            this.setState({
                filterdata: []
            })
        else
            this.setState({
                filterdata: autocompletedata.filter((s) => s.toLowerCase().substring(0, value.length) === value.toLowerCase())
            })
    }
    render() {
        const data = [
            {
                name: "limit win",
                "1": 2.5,
                "3": 2,
                "5": 1.3,
                "6": 1.4,
                "9": .7,
                "11": .3,
                "13": 2.4,
                "15": .6,
                "17": 2.3,
                "19": 1.4,
                "21": .6,
                "23": 1.6
            },
            {
                name: "market win",
                "1": 5.4,
                "3": 3.2,
                "5": 5.5,
                "6": 6.7,
                "9": 2.6,
                "11": 5.5,
                "13": 7.4,
                "15": 2.4,
                "17": 5.3,
                "19": 2.4,
                "21": 5.6,
                "23": 5.6
            },
            {
                name: "limit lose",
                "2": -2.4,
                "4": -2.2,
                "7": -1.5,
                "8": -1.7,
                "10": -1.6,
                "12": -2.5,
                "14": -2.4,
                "16": -1.4,
                "18": -2.3,
                "20": -2.4,
                "22": -1.6,
                "24": -0.6
            },
            {
                name: "market lose",
                "2": -5.3,
                "4": -6.8,
                "7": -6.3,
                "8": -7.4,
                "10": -4.7,
                "12": -2.3,
                "14": -4.4,
                "16": -5.6,
                "18": -2.3,
                "20": -5.4,
                "22": -3.6,
                "24": -5.6
            }
          ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
            key: "月份",
            value: "月均降雨量"
        });
        return (
            <div>
                <Row>
                    <Affix offsetTop={0}>
                        <Menu
                            selectedKeys={['parity']}
                            mode="horizontal"
                            theme='dark'
                            style={{padding:'10px 0'}}>
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
                            <SubMenu style={{float:'right',padding:0}} title={<span className="submenu-title-wrapper"><Icon type="team" style={{fontSize:20}} /></span>}>
                                <Menu.Item key="user:1" style={{margin:0,background:'#00101a'}}><Icon type="user"/>John</Menu.Item>
                                <Menu.Item key="user:2" style={{margin:0,background:'#00101a'}}><Icon type="user"/>Kerry</Menu.Item>
                                <Menu.Item key="user:3" style={{margin:0,background:'#00101a'}}><Icon type="user"/>Volten</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Affix>
                </Row>
                {
                    this.state.parityboxes.map((box, i) => 
                        <Paritybox 
                            key={i}
                            // value props
                            dv         = {dv}
                            filterdata = {this.state.filterdata}
                            // action props
                            boxadd       = {this.boxadd}
                            boxremove    = {this.boxremove}
                            autocomplete = {this.autocomplete}
                        />
                    )
                }
            </div>
        )
    }
}