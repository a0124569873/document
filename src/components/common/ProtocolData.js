export default {
    
  key (key) {
    this._try_build_map()
        
    return this._map.key[key]
  },
    
  value (value) {
    this._try_build_map()
        
    return this._map.value[`${value}`]
  },
  _try_build_map () {
    if (this._map) {
      return
    }
        
    this._map = {key: {}, value: {}}
    for (let e of this.data) {
      this._map['key'][e['text']] = e['value']
      this._map['value'][e['value']] = e['text']
    }
  },
  data: [
        // { text: 'ALL', value: 'all' },
        // { text: 'ICMP', value: '1' },
        { text: 'TCP', value: '6' },
        { text: 'UDP', value: '17' }              
        // { text: 'ARGUS', value: '13' },
        // { text: 'AH', value: '51' },
        // { text: 'any host internal protocol', value: '61' },
        // { text: 'any local network', value: '63' },
        // { text: 'any distributed file system', value: '68' },
        // { text: 'AX.25', value: '93' },
        // { text: 'any private encryp scheme', value: '99' },
        // { text: 'ARIS', value: '104' },
        // { text: 'A/N', value: '107' },
        // { text: 'any 0-hop protocol', value: '114' },     
        // { text: 'BBN-RCC-MON', value: '10' },
        // { text: 'BNA', value: '49' }, 
        // { text: 'BR-SAT-MON', value: '76' },        
        // { text: 'CBT', value: '7' },
        // { text: 'CHAOS', value: '16' },
        // { text: 'CPNX', value: '72' },
        // { text: 'CPHB', value: '73' },
        // { text: 'Compaq-Peer', value: '110' },
        // { text: 'CFTP', value: '62' },
        // { text: 'CRTP', value: '126' },
        // { text: 'CRUDP', value: '127' },     
        // { text: 'DDX', value: '116' },
        // { text: 'DCN-MEAS', value: '19' },
        // { text: 'DCCP', value: '33' },
        // { text: 'DDP', value: '37' },
        // { text: 'DGP', value: '86' },       
        // { text: 'EGP', value: '8' },
        // { text: 'EMCON', value: '14' },
        // { text: 'ESP', value: '50' },
        // { text: 'ETHERIP', value: '97' },
        // { text: 'ENCAP', value: '98' },
        // { text: 'EIGRP', value: '88' },       
        // { text: 'FIRE', value: '125' },
        // { text: 'FC', value: '133' }, 
        // { text: 'GRE', value: '47' },
        // { text: 'GGP', value: '3' },
        // { text: 'GMTP', value: '100' },
        // { text: 'HOPOPT', value: '0' },
        // { text: 'HMP', value: '20' },
        // { text: 'IP', value: '4' },
        // { text: 'IGMP', value: '2' },
        // { text: 'IGP', value: '9' },
        // { text: 'IRTP', value: '28' },
        // { text: 'ISO-TP4', value: '29' },
        // { text: 'IDPR', value: '35' },
        // { text: 'IL', value: '40' },
        // { text: 'IPv6-Route', value: '43' },
        // { text: 'IPv6-Frag', value: '44' },
        // { text: 'IDRP', value: '45' },
        // { text: 'IPv6', value: '41' },
        // { text: 'I-NLSP', value: '52' },
        // { text: 'IPv6-ICMP', value: '58' },
        // { text: 'IPv6-NoNxt', value: '59' },
        // { text: 'IPv6-Opts', value: '60' },
        // { text: 'IPPC', value: '67' },
        // { text: 'IPCV', value: '71' },
        // { text: 'ISO-IP', value: '80' },
        // { text: 'IPIP', value: '94' },
        // { text: 'IFMP', value: '101' },
        // { text: 'IPComp', value: '108' },
        // { text: 'IPX-in-IP', value: '111' },
        // { text: 'IATP', value: '117' },
        // { text: 'ISISover', value: '124' },
        // { text: 'IPLT', value: '129' },
        // { text: 'IDPR-CMTP', value: '38' },        
        // { text: 'KRYPTOLAN', value: '65' },
        // { text: 'LEAF-1', value: '25' },
        // { text: 'LEAF-2', value: '26' },
        // { text: 'L2TP', value: '115' },
        // { text: 'LARP', value: '91' },
        // { text: 'MUX', value: '18' },
        // { text: 'MFE-NSP', value: '31' },
        // { text: 'MERIT-INP', value: '32' },
        // { text: 'MHRP', value: '48' },
        // { text: 'MOBILE', value: '55' },
        // { text: 'MTP', value: '92' },
        // { text: 'MICP', value: '95' },
        // { text: 'MobilityHeader', value: '135' },
        // { text: 'MPLS-in-IP', value: '137' },
        // { text: 'NETBLT', value: '30' },
        // { text: 'NARP', value: '54' },
        // { text: 'NVP-II', value: '11' },
        // { text: 'NSFNET-IGP', value: '85' },
        // { text: 'OSPFIGP', value: '89' },
        // { text: 'PUP', value: '12' },
        // { text: 'PRM', value: '21' },
        // { text: 'PVP', value: '75' },
        // { text: 'PNNI', value: '102' },
        // { text: 'PIM', value: '103' },
        // { text: 'PGM', value: '113' },
        // { text: 'PTP', value: '123' },
        // { text: 'PIPE', value: '131' },
        // { text: 'QNX', value: '106' },
        // { text: 'RDP', value: '27' },
        // { text: 'RSVP', value: '46' },
        // { text: 'RVD', value: '66' },
        // { text: 'RSVP-E2E-IGNORE', value: '134' },      
        // { text: 'ST', value: '5' },
        // { text: 'SDRP', value: '42' },
        // { text: 'SWIPE', value: '53' },
        // { text: 'SKIP', value: '57' },
        // { text: 'SAT-EXPAK', value: '64' },
        // { text: 'SAT-MON', value: '69' },
        // { text: 'SECURE-VMTP', value: '82' },
        // { text: 'Sprite-RPC', value: '90' },
        // { text: 'SCC-SP', value: '96' },
        // { text: 'SCPS', value: '105' },
        // { text: 'SUN-ND', value: '77' },
        // { text: 'SNP', value: '109' },
        // { text: 'STP', value: '118' },
        // { text: 'SRP', value: '119' },
        // { text: 'SMP', value: '121' },
        // { text: 'SM', value: '122' },
        // { text: 'SSCOPMCE', value: '128' },
        // { text: 'SPS', value: '130' },
        // { text: 'SCTP', value: '132' },
        // { text: 'TRUNK-1', value: '23' },
        // { text: 'TRUNK-2', value: '24' },
        // { text: 'TP++', value: '39' },
        // { text: 'TLSP', value: '56' },
        // { text: 'TTP', value: '84' },
        // { text: 'TCF', value: '87' },
        // { text: 'UTI', value: '120' },
        // { text: 'UDPLite', value: '136' },       
        // { text: 'VISA', value: '70' },
        // { text: 'VMTP', value: '81' },
        // { text: 'VINES', value: '83' },
        // { text: 'VRRP', value: '112' },
        // { text: 'WSN', value: '74' },
        // { text: 'WB-MON', value: '78' },
        // { text: 'WB-EXPAK', value: '79' },        
        // { text: 'XNET', value: '15' },
        // { text: 'XNS-IDP', value: '22' },
        // { text: 'XTP', value: '36' },        
        // { text: '3PC', value: '34' }
  ]    
}