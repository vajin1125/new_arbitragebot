import { Component } from 'react'
import { Row, Col } from 'antd'
import { Select, Button, Input, InputNumber, Menu, Icon, Popconfirm, Affix, message } from 'antd'
import PieChart from 'react-minimal-pie-chart'
import '../assets/css/style.css'

const Option = Select.Option;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;

const datacollection = {
    BINANCE: [
            'BTC/USDT', 'ETH/USDT', 'LTC/USDT', 'XRP/USDT', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC', 'BTG/USDT', 'ETC/USDT', 'BCC/USDT', 'BTG/BTC', 'ETC/BTC', 'XEM/BTC', 'BCC/BTC', 'DASH/BTC'    
        ],
    BTCTURK: [
            'BTC/TRY', 'BTC/USDT', 'ETH/TRY', 'LTC/TRY', 'XRP/TRY', 'USDT/TRY'
        ],
    KOINEKS: [
            'BTC/TRY', 'BTC/USDT', 'ETH/TRY', 'LTC/TRY', 'XRP/TRY', 'USDT/TRY', 'DASH/TRY', 'XLM/TRY', 'BTG/TRY', 'ETC/TRY', 'XEM/TRY', 'DOGE/TRY', 'BCH/TRY'    
        ]
}

export default class extends Component {
    state = {
        affixtop : 10,
        menukey: 'exchange',
        selectdisble: true,

        // Initial One
        exchangeboxes: ['BINANCE'],
        parities: ['BTC/USDT'],
        balances: [100],
        ratios: [1.5],

        piedata: [[5000, 5000]],
        piecolors: ['#ff7202', '#5ca536']
    }
    boxadd = () => {
        message.success('A new box created.');
        var T = this.state.exchangeboxes;
        var P = this.state.parities;
        var isNew = false;
        for (let key of Object.keys(datacollection)) {
            if (!this.state.exchangeboxes.includes(key)) {
                T.push(key);
                P.push(datacollection[key][0]);
                isNew = true;
                break;
            }
        }
        if (!isNew) {
            T.push('BINANCE');                
            P.push(datacollection['BINANCE'][0]);
        }
        let B = this.state.balances;
        B.push(100);
        let R = this.state.ratios;
        R.push(1.5);
        this.setState({
            exchangeboxes: T,
            parities: P,
            balances: B,
            ratios: R
        })
        let C = this.state.piedata;
        C.push([5000, 5000]);
        this.setState({
            piedata: C
        })
    }
    boxremove = (boxkey) => {        
        let T = this.state.exchangeboxes;
        if (T.length == 1) {
            message.warning('Sorry. The last box cannot be removed.');
            return;
        }
        T.splice(boxkey, 1);
        let P = this.state.parities;
        P.splice(boxkey, 1);
        let B = this.state.balances;
        B.splice(boxkey, 1);
        let R = this.state.ratios;
        R.splice(boxkey, 1);
        let C = this.state.piedata;
        C.splice(boxkey, 1);
        this.setState({
            exchangeboxes: T,
            parities: P,
            balances: B,
            ratios: R,
            piedata: C
        })
        message.success('The selected box removed.');
    }
    exchangeChange = (boxkey, value) => {
        let T = this.state.exchangeboxes;
        T[boxkey] = value;
        let P = this.state.parities;
        P[boxkey] = datacollection[value][0];
        this.setState({
            exchangeboxes: T,
            parities: P,
            selectdisble: true
        });
        switch (value) {
            case 'BINANCE':
                fetch('/binance-depth/' + datacollection[value][0].replace('/', ''))
                    .then(res => res.json())
                    .then(data => this.setState({
                        [value + datacollection[value][0].replace('/', '_')]: data
                    })
                );
                break;
            case 'BTCTURK':
                Promise.all([
                    fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + datacollection[value][0].replace('/', '')),
                    fetch('https://www.btcturk.com/api/trades?pairSymbol=' + datacollection[value][0].replace('/', '') + '&last=18')
                ])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([data1, data2]) => this.setState({
                    [value + datacollection[value][0].replace('/', '_')]: data1, 
                    [value + datacollection[value][0].replace('/', '_') + 'history']: data2
                }));
                break;
            case 'KOINEKS':
                fetch('https://cors.io/?https://koineks.com/ticker')
                    .then(res => res.json())
                    .then(data => this.setState({
                        [value + datacollection[value][0].replace('/', '_')]: data
                    })
                );
                break;
        }
    }
    parityChange = (boxkey, value) => {
        let P = this.state.parities;
        P[boxkey] = value;
        this.setState({
            parities: P,
            selectdisble: true
        });
        switch (this.state.exchangeboxes[boxkey]) {
            case 'BINANCE':
                fetch('/binance-depth/' + value.replace('/', ''))
                    .then(res => res.json())
                    .then(data => this.setState({
                        [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data
                    })
                );
                break;
            case 'BTCTURK':
                Promise.all([
                    fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + value.replace('/', '')),
                    fetch('https://www.btcturk.com/api/trades?pairSymbol=' + value.replace('/', '') + '&last=18')
                ])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([data1, data2]) => this.setState({
                    [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data1,
                    [this.state.exchangeboxes[boxkey] + value.replace('/', '_') + 'history']: data2
                }));
                break;
            case 'KOINEKS':
                fetch('https://cors.io/?https://koineks.com/ticker')
                    .then(res => res.json())
                    .then(data => this.setState({
                        [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data
                    })
                );
                break;
        }
    }
    balanceChange =(boxkey, value) => {
        let T = this.state.balances;
        T[boxkey] = value;
        this.setState({
            balances: T
        });
    }
    ratioChange =(boxkey, value) => {
        let T = this.state.ratios;
        T[boxkey] = value;
        this.setState({
            ratios: T
        })
    }
    fiveInterval = () => {
        let array = [];
        for (let i=0; i<this.state.exchangeboxes.length; i++) {
            array.push({[this.state.exchangeboxes[i]]: this.state.parities[i]});
            ////
            let parity = this.state.parities[i].replace('/', '_');
            let T = this.state.piedata;
            switch (this.state.exchangeboxes[i]) {
                case 'BINANCE':                    
                    T[i] = [5000, parseFloat(Object.keys(this.state['BINANCE' + parity].depth.bids)[7])];
                    break;
                case 'BTCTURK':
                    T[i] = [5000, parseFloat(this.state['BTCTURK' + parity].bids[7][0])];
                    break;
                case 'KOINEKS':
                    let a = parity.split('_');
                    let b = a[0];
                    T[i] = [5000, parseFloat(this.state['KOINEKS' + parity][b].bid)];
                    break;
            }
            this.setState({
                piedata: T
            })
        }
        let uniquearray = [];
        for (let item of array) {
            let key = Object.keys(item)[0];
            let value = item[key];
            let isItem = true;
            for (let subitem of uniquearray) {
              if (Object.keys(subitem)[0] === key && subitem[Object.keys(subitem)[0]] === value) {
                isItem = false;
                break;
              }
            }
            if (isItem) {
                uniquearray.push({[key]:value});
            }
        }
        for (let item of uniquearray) {
            let key = Object.keys(item)[0];
            let value = item[key].replace('/', '');
            switch (key) {
                case 'BINANCE':
                    fetch('/binance-depth/' + value)
                        .then(res => res.json())
                        .then(data => this.setState({
                            ['BINANCE' + item[key].replace('/', '_')]: data
                        })
                    );
                    break;
                case 'BTCTURK':
                    Promise.all([
                        fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + value),
                        fetch('https://www.btcturk.com/api/trades?pairSymbol=' + value + '&last=18')
                    ])
                    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                    .then(([data1, data2]) => this.setState({
                        ['BTCTURK' + item[key].replace('/', '_')]: data1,
                        ['BTCTURK' + item[key].replace('/', '_') + 'history']: data2
                    }))
                    .catch((error) => {
                        console.error(error);
                    })
                    break;
                case 'KOINEKS':
                    fetch('https://cors.io/?https://koineks.com/ticker')
                        .then(res => res.json())
                        .then(data => this.setState({
                            ['KOINEKS' + item[key].replace('/', '_')]: data
                        })
                    );
                    break;
            }
        }
    }
    componentDidMount = () => {      
        Promise.all([
            fetch('/binance-depth/' + datacollection['BINANCE'][0].replace('/', '')),
            fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + datacollection['BTCTURK'][0].replace('/', '')),
            fetch('https://www.btcturk.com/api/trades?pairSymbol=' + datacollection['BTCTURK'][0].replace('/', '') + '&last=18'),
            fetch('https://cors.io/?https://koineks.com/ticker') 
        ])
        .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([data1, data2, data3, data4]) => this.setState({
            ['BINANCE' + datacollection['BINANCE'][0].replace('/', '_')]: data1, 
            ['BTCTURK' + datacollection['BTCTURK'][0].replace('/', '_')]: data2,
            ['BTCTURK' + datacollection['BTCTURK'][0].replace('/', '_') + 'history']: data3,
            ['KOINEKS' + datacollection['KOINEKS'][0].replace('/', '_')]: data4
        }))
        .catch((error) => {
            console.error(error);
        })
        // /binance-depth/BTCUSDT
        // https://www.btcturk.com/api/orderbook?pairSymbol=BTCTRY
        // https://www.btcturk.com/api/trades?pairSymbol=BTCTRY&last=18
        // https://cors.io/?https://koineks.com/ticker
        this.timer = setInterval(() => this.fiveInterval(), 5000) 
    }
    componentDidUpdate = () => {
        if (this.state.selectdisble)
            this.setState({
                selectdisble: false
            })
    }
    componentWillUnmount = () => {
        clearInterval(this.timer);
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////                PAGE RENDER                  ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    render() {        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////                COMPONENTS DEFINITION                  ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  MENU BAR  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Menubar = () => (
            <Affix offsetTop={this.state.affixtop}>
                <Menu
                    selectedKeys={[this.state.menukey]}
                    mode="horizontal"
                    theme='dark'>
                    <Menu.Item key="exchange">
                        <a href="/index">
                            <Icon type="appstore" />Exchange{this.state.TEST}
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
        )
//  HEAD COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Headbar = props => (
            <Row>
                <Col span={24} style={{padding:3}}>
                    <ButtonGroup>
                        <Button icon="plus" onClick={this.boxadd} disabled={this.state.selectdisble} />
                        <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={() => this.boxremove(props.boxkey)} okText="Yes" cancelText="No">
                            <Button icon="minus" disabled={this.state.selectdisble} />
                        </Popconfirm>
                    </ButtonGroup>
                    <Select value={this.state.parities[props.boxkey]} style={{ width:120,float:'right' }} onChange={(e) => this.parityChange(props.boxkey, e)} disabled={this.state.selectdisble}>
                        {datacollection[props.exchange].map(parity => <Option key={parity}>{parity}</Option>)}
                    </Select>
                    <Select value={this.state.exchangeboxes[props.boxkey]} style={{ width:120,float:'right',marginRight:3 }} onChange={(e) => this.exchangeChange(props.boxkey, e)} disabled={this.state.selectdisble}>
                        {
                            Object.keys(datacollection).map(exchange => (
                                <Option value={exchange} key={exchange}>{exchange}</Option>        
                            ))
                        }
                    </Select>
                </Col>
            </Row>
        )
//  CONTENT COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Contentbar = props => {      
            const EP = props.exchange + this.state.parities[props.boxkey].replace('/', '_');
            if (this.state[EP]) {
                if (props.exchange == 'BINANCE') {
                    var Buydata = () =>
                        (Object.keys(this.state[EP].depth.bids).slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item).toFixed(2) }</td>
                                <td>{ parseFloat(this.state[EP].depth.bids[item]).toFixed(4) }</td>
                                <td>{ (parseFloat(item).toFixed(2) * parseFloat(this.state[EP].depth.bids[item]).toFixed(4)).toFixed(2) }</td>
                            </tr>
                        )))
                    var Selldata = () =>
                        (Object.keys(this.state[EP].depth.asks).slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item).toFixed(2) }</td>
                                <td>{ parseFloat(this.state[EP].depth.asks[item]).toFixed(4) }</td>
                                <td>{ (parseFloat(item).toFixed(2) * parseFloat(this.state[EP].depth.asks[item]).toFixed(4)).toFixed(2) }</td>
                            </tr>
                        )))
                    if (Object.keys(this.state[EP].history).length===0 && this.state[EP].history.constructor===Object) {
                        var Historydata = () => <tr><td colSpan='3'><Icon type="loading-3-quarters" style={{ fontSize:20,color:'#888' }} spin/>So Lazy</td></tr>;
                    } else {
                        var Historydata = () =>
                            (this.state[EP].history.map((item, i) => (
                                <tr className='trrow' key={i}>
                                    <td>{ parseFloat(item.p).toFixed(2) }</td>
                                    <td>{ parseFloat(item.q).toFixed(4) }</td>
                                    <td>{ (new Date(item.T*1000)).getHours()+':'+(new Date(item.T*1000)).getMinutes()+':'+(new Date(item.T*1000)).getSeconds() }</td>
                                </tr>                                                        
                            )))
                    }
                } else if (props.exchange == 'BTCTURK') {
                    var Buydata = () => 
                        (this.state[EP].bids.slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item[0]).toFixed(2) }</td>
                                <td>{ parseFloat(item[1]).toFixed(4) }</td>
                                <td>{ (parseFloat(item[0]).toFixed(2) * parseFloat(item[1]).toFixed(4)).toFixed(2) }</td>
                            </tr>                                                        
                        )))
                    var Selldata = () => 
                        (this.state[EP].asks.slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item[0]).toFixed(2) }</td>
                                <td>{ parseFloat(item[1]).toFixed(4) }</td>
                                <td>{ (parseFloat(item[0]).toFixed(2) * parseFloat(item[1]).toFixed(4)).toFixed(2) }</td>
                            </tr>                                                        
                        )))
                    var Historydata = () =>
                        (this.state[EP + 'history'].map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item.price).toFixed(2) }</td>
                                <td>{ parseFloat(item.amount).toFixed(4) }</td>
                                <td>{ (new Date(item.date)).getHours()+':0'+(new Date(item.date)).getMinutes()+':0'+(new Date(item.date)).getSeconds() }</td>
                            </tr>                                                        
                        )))
                } else if (props.exchange == 'KOINEKS') {
                    let a = this.state.parities[props.boxkey];
                    let b = a.split('/');
                    let c = b[0];
                    var Buydata = () =>
                        <tr className='trrow'>
                            <td>{ parseFloat(this.state[EP][c].bid).toFixed(2) }</td>
                            <td>{ parseFloat(this.state[EP][c].change_amount).toFixed(4) }</td>
                            <td>{ (parseFloat(this.state[EP][c].bid).toFixed(2)*parseFloat(this.state[EP][c].change_amount)).toFixed(2) }</td>
                        </tr>
                    var Selldata = () =>
                        <tr className='trrow'>
                            <td>{ parseFloat(this.state[EP][c].ask).toFixed(2) }</td>
                            <td>{ parseFloat(this.state[EP][c].change_amount).toFixed(4) }</td>
                            <td>{ (parseFloat(this.state[EP][c].ask).toFixed(2)*parseFloat(this.state[EP][c].change_amount)).toFixed(2) }</td>
                        </tr>
                    var Historydata = () => <tr><td colSpan='3'>No History Data</td></tr>;
                }
            } else {
                var Buydata = () => <tr><td colSpan='3'><Icon type="loading-3-quarters" style={{ fontSize:20,color:'#888' }} spin/></td></tr>;
                var Selldata = Buydata;
                var Historydata = Buydata;    
            }
            return (
                <Row gutter={3} style={{padding:'0 3px'}}>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Buy Orders
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Total</td></tr>
                                        <Buydata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Sell Orders
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Total</td></tr>
                                        <Selldata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Order History
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Time</td></tr>
                                        <Historydata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            )
        }
//  BOTTOM COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Chartbar = props => {
            if (this.state.piedata)
                var Piechart = () => <Pie
                                        data={ this.state.piedata[props.boxkey] }
                                        radius={ 60 }
                                        hole={ 0 }
                                        colors={ this.state.piecolors }
                                        strokeWidth={ 3 }
                                        labels={ true }
                                    />
            else
                var Piechart = () => '';
            return (
                <Row style={{padding:'20px 0'}}>
                    <Col span={7} style={{textAlign:'center'}}>
                        <Piechart />
                    </Col>
                    <Col span={11}>
                        <ul style={{height:27,marginBottom:0}}>
                            <li style={{width:'50%',float:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                balance warning
                            </li>
                            <li style={{width:'50%',float:'left'}}>
                            <InputNumber
                                value={this.state.balances[props.boxkey]}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                style={{width:'100%'}}
                                size='small'
                                onChange={(e) => this.balanceChange(props.boxkey, e)}
                            />    
                            </li>
                        </ul>
                        <ul style={{height:27,marginBottom:0}}>
                            <li style={{width:'50%',float:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                ratio warning %
                            </li>
                            <li style={{width:'50%',float:'left'}}>
                            <InputNumber
                                value={this.state.ratios[props.boxkey]}
                                min={0}
                                max={100}
                                formatter={value => `${value}%`}
                                parser={value => value.replace('%', '')}
                                step={.1}
                                style={{width:'100%'}}
                                size='small'
                                onChange={(e) => this.ratioChange(props.boxkey, e)}
                            />
                            </li>
                        </ul>
                        <ul style={{height:27,marginBottom:0}}>
                            <li style={{width:'50%',float:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                API key
                            </li>
                            <li style={{width:'50%',float:'left'}}>
                                <Input size='small'/>
                            </li>
                        </ul>
                        <ul style={{height:27,marginBottom:0}}>
                            <li style={{width:'50%',float:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                Secret key
                            </li>
                            <li style={{width:'50%',float:'left'}}>
                                <Input size='small'/>
                            </li>
                        </ul>
                        <InputGroup compact>
                            <Input placeholder={this.state.parities[props.boxkey].split('/')[0] + ' key'} style={{width:'50%'}}/>
                            <Input placeholder={this.state.parities[props.boxkey].split('/')[1] + ' key'} style={{width:'50%'}}/>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                        <PieChart style={{width:'55%',margin:'auto'}}
                            data={[                                                                                                            
                                { title: 'One', value: 8, color: '#006fc1' },
                                { title: 'Three', value: 10, color: '#ffc103' },
                        ]} />
                    </Col>
                </Row>
            )
        }
//  EXCHANGE BOX  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Exchangebox = props => (
            <Col span={8} className="exchangebox">
                <div>
                    <Headbar exchange={props.exchange} boxkey={props.boxkey} />
                    <Contentbar exchange={props.exchange} boxkey={props.boxkey} />
                    <Chartbar exchange={props.exchange} boxkey={props.boxkey} />
                </div>
            </Col>
        )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////                REURN VIEW                  ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return (                
            <div style={{padding:10}}>
                <Row>
                    <Menubar />
                </Row>
                <Row gutter={6} style={{paddingTop:5}}>
                    {
                        this.state.exchangeboxes.map((box, i) => (
                            <Exchangebox key={i} exchange={box} boxkey={i}/>    
                        ))
                    }
                </Row>                
            </div>
          )
      }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////                PIE CHART                  ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAnglePoint(startAngle, endAngle, radius, x, y) {
	var x1, y1, x2, y2;

	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

	return { x1, y1, x2, y2 };
}

const Pie = (props) => {	
    var colors = props.colors,
        colorsLength = colors.length,
        labels = props.labels,
        hole = props.hole,
        radius = props.radius,
        diameter = radius * 2,
        sum, startAngle = null;
		sum = props.data.reduce(function (carry, current) { return carry + current }, 0);
        startAngle = 0;
		return (
			<svg width={ diameter } height={ diameter } viewBox={ '0 0 ' + diameter + ' ' + diameter } version="1.1">
				{ props.data.map(function (slice, sliceIndex) {
					var angle, nextAngle, percent;
					nextAngle = startAngle;
					angle = (slice / sum) * 360;
					percent = (slice / sum) * 100;
                    startAngle += angle;
					return <Slice
                        key={ sliceIndex }
                        key1={ sliceIndex }
						value={ slice }
						percent={ props.percent }
						percentValue={ percent.toFixed(1) }
						startAngle={ nextAngle }
						angle={ angle }
						radius={ radius }
						hole={ radius - hole }
						trueHole={ hole }
						showLabel= { labels }
						fill={ colors[sliceIndex % colorsLength] }
						stroke={ props.stroke }
						strokeWidth={ props.strokeWidth }
                    />
				}) }
			</svg>
		);
}
class Slice extends React.Component {
	state = {
        path: '',
        x: 0,
        y: 0
	}
	componentWillReceiveProps = () => {
		this.setState({ path: '' });
		this.animate();
	}
	componentDidMount = () => {
		this.animate();
	}
	animate = () => {
		this.draw(0);
	}
	draw = (s) => {
		var p = this.props, path = [], a, b, c, self = this, step;
		step = p.angle / (37.5 / 2);
		if (s + step > p.angle) {
			s = p.angle;
		}
		a = getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
        b = getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);        
		path.push('M' + a.x1 + ',' + a.y1);
		path.push('A'+ p.radius +','+ p.radius +' 0 '+ (s > 180 ? 1 : 0) +',1 '+ a.x2 + ',' + a.y2);
		path.push('L' + b.x2 + ',' + b.y2);
		path.push('A'+ (p.radius- p.hole) +','+ (p.radius- p.hole) +' 0 '+ (s > 180 ? 1 : 0) +',0 '+ b.x1 + ',' + b.y1);
		path.push('Z');
		this.setState({ path: path.join(' ') });
		if (s < p.angle) {
            self.draw(s + step);
		} else if (p.showLabel) {
			c = getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);
			this.setState({
				x: c.x2,
				y: c.y2
			});
		}
	}
	render() {
		return (
			<g overflow="hidden">
				<path
					d={ this.state.path }
					fill={ this.props.fill }
					stroke={ this.props.stroke }
					strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 3 }
					 />
				{ this.props.showLabel && this.props.percentValue > 5 ?
					<text x={ this.state.x } y={ this.state.y } fill="#fff" textAnchor="middle">
						{ this.props.key1 == 1 ? this.props.value + '$' : 'BTC' }
					</text>
				: null }
			</g>
		);
	}
}