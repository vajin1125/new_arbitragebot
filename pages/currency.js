import { Component } from 'react'
import { Row, Col } from 'antd'
import { Select, Button, Menu, Icon, Popconfirm, message, Affix } from 'antd'
import { RealTimeChartWidget } from 'react-tradingview-widgets'
import '../assets/css/style.css'

const ButtonGroup = Button.Group;
const Option = Select.Option;
const currencies = ['USDTRY', 'EURUSD', 'USDKRW', 'USDIDR'];
const SubMenu = Menu.SubMenu;

const Tradingview = (props) => {
    if (props.tradingviewstatus)
        var T = () => <RealTimeChartWidget
                    width="100%"
                    height="300"
                    symbol={ props.currency }
                    locale="en"
                    interval="D"
                    theme="light"
                />
    else
        var T = () => ''
    return (
        <T />
    )
}
const Currencybox = (props) => (
    <Row style={{marginBottom:5}}>
        <Col span={24}>
            <div style={{background:'#FFF',paddingTop:5}}>
                <Row>
                    <Col span={24}>
                        <ButtonGroup style={{margin:'3px 0 0 3px'}}>
                            <Button icon="plus" onClick={props.boxadd} />
                            <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={() => props.boxremove(props.boxkey)} okText="Yes" cancelText="No">
                                <Button icon="minus" />
                            </Popconfirm>
                        </ButtonGroup>
                        <Select value={props.box} onChange={(e) => props.currencychange(props.boxkey, e)} style={{marginLeft:3}}>
                            {currencies.map((currency, i) => <Option value={ currency } key={ currency }>{ currency }</Option>)}
                        </Select>
                        <label style={{float:'right',borderLeft:'solid silver 1px',padding:'9px 20px'}}>
                            { props.currency }
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{height:300,textAlign:'center'}}>
                        <Tradingview currency={props.currency} tradingviewstatus={props.tradingviewstatus}/>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>                
)

export default class extends Component {
    state = {
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
        return (
            <div>
                <Row>
                    <Affix offsetTop={0}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={['currency']}
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
                {this.state.currencyboxes.map((currency, i) => (
                    <Currencybox
                        key={i}
                        // value props
                        currency          = {currency}
                        boxkey            = {i}
                        box               = {this.state.currencyboxes[i]}
                        tradingviewstatus = {this.state.tradingviewstatus}
                        // action props
                        boxadd         = {this.boxadd}
                        boxremove      = {this.boxremove}
                        currencychange = {this.currencychange}
                    />
                ))}                
            </div>
        )
    }
}