import { Component } from 'react'
import { Row, Col } from 'antd'
import { Select, Button, Menu, Icon, Popconfirm, message, Affix } from 'antd'
import { RealTimeChartWidget } from 'react-tradingview-widgets'
import '../assets/css/style.css'

const ButtonGroup = Button.Group;
const Option = Select.Option;
const currencies = ['USDTRY', 'EURUSD', 'USDKRW', 'USDIDR'];

export default class extends Component {
    state = {
        top: 10,
        menukey: 'currency',
        tradingviewstatus: false,
        currencyboxes: [currencies[0]]
    }    
    
    boxadd = () => {
        let T = this.state.currencyboxes;
        var isNew = false;
        for (let currency of currencies) {
            if (!this.state.currencyboxes.includes(currency)) {
                T.push(currency);
                isNew = true;
                break;
            }
        }
        if (!isNew) {
            T.push(currencies[0]);                
        }
        this.setState({
            currencyboxes: T
        });
        message.success('A new box created');
    }
    boxremove = (boxkey) => {
        let T = this.state.currencyboxes;
        if (T.length == 1) {
            message.warning('Sorry. The last box cannot be removed.');
            return;
        }
        T.splice(boxkey, 1);
        this.setState({
            currencyboxes: T
        })
        message.success('The selected box removed.');
    }
    currencychange = (boxkey, value) => {
        let T = this.state.currencyboxes;
        T[boxkey] = value;
        this.setState({
            currencyboxes: T
        });
    }
    componentDidMount() {
        setTimeout(function() {
            this.setState({tradingviewstatus: true})
        }.bind(this), 0)
    }
    render() {
        if (this.state.tradingviewstatus) {
            var Tradingview = props => (
                <RealTimeChartWidget
                    width="100%"
                    height="300"
                    symbol={ props.currency }
                    locale="en"
                    interval="D"
                    theme="light"
                />
            )
        } else {
            var Tradingview = () => '';
        }
        const Currencybox = props => (
            <Row style={{marginTop:10}}>
                <Col span={24}>
                    <div style={{background:'#FFF',paddingTop:5}}>
                        <Row>
                            <Col span={24}>
                                <ButtonGroup style={{margin:'3px 0 0 3px'}}>
                                    <Button icon="plus" onClick={this.boxadd} />
                                    <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={() => this.boxremove(props.boxkey)} okText="Yes" cancelText="No">
                                        <Button icon="minus" />
                                    </Popconfirm>
                                </ButtonGroup>
                                <Select value={this.state.currencyboxes[props.boxkey]} onChange={(e) => this.currencychange(props.boxkey, e)} style={{marginLeft:3}}>
                                    {currencies.map((currency, i) => <Option value={ currency } key={ currency }>{ currency }</Option>)}
                                </Select>
                                <label style={{float:'right',borderLeft:'solid silver 1px',padding:'9px 20px'}}>
                                    { props.currency }
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{height:300,textAlign:'center'}}>
                                <Tradingview currency={props.currency}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>                
        )
        return (
            <div style={{padding:10}}>
                <Row>
                    <Affix offsetTop={this.state.top}>
                        <Menu
                            onClick={this.handleClick}
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
                {this.state.currencyboxes.map((currency, i) => (
                    <Currencybox key={i} currency={currency} boxkey={i}/>
                ))}                
            </div>
        )
    }
}