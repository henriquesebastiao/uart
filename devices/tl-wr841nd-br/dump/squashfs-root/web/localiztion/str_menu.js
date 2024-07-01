var str_menu =   new Object()

str_menu.status							=  "Informações";				
str_menu.wizard							=  "Passo a passo"; 
//added by zqq,07.11.22
str_menu.wpsCfg                        =   "WPS";
	
//end	
str_menu.band							= "Dual Band Selection";
str_menu.ntwMain						=  "Interfaces LAN / WAN";
str_menu.ntwConnMode					=  "Acesso a Internet"; 
str_menu.ntwMobile						=  "3G";				
str_menu.ntwWan							=  "WAN"; 				
str_menu.ntwIptv						=	"IPTV";
str_menu.ntwService						=  "Serviço de Detecção de Rede";  											
str_menu.ntwMacClone					=  "Clonar MAC";
str_menu.ntwLan							=  "LAN"; 
//added by kuangguiming 24Oct13
str_menu.ntwRussiaVlan					=	"IPTV"; 
//end add by kuangguiming 24Oct13		 
str_menu.ntwFlowBalace					=  "Balanceamento de fluxo";		
str_menu.ntwBandWidth					=  "Banda Larga"; 		
str_menu.ntwVlan						=  "VLAN"; 			
str_menu.ntwPrtMonitor					=  "Monitor de portas";		
str_menu.ntwPrtPara						=  "Parâmetros da WAN";				
str_menu.wlanMain						=  "Wireless";
//add by zhanglipeng 2010-01-06
str_menu.workingModeRpm					=  "Módulo de trabalho";
//end add 2010-01-06
str_menu.wlanNetwork					=  "Configurações";
str_menu.wlanMacFlt						=  "Filtrar MAC";
//added by zqq,07.11.22
str_menu.wlanAdvCfg                     =  "Avançado";
//end
str_menu.wlanStation					=  "Estatísticas";
str_menu.wlanSecurityRpm                =  "Segurança";
                                         		
//add by Rugemeng 20120903
//str_menu.guestNetwork					=  "Guest Network";
//end add        

//add for Guest_Network
str_menu.guestNetCfg					=  "Guest Network";
str_menu.guestNetWirelessCfg			=  "Wireless Settings";
str_menu.guestNetUsbCfg					=  "Storage Sharing";
//end for add

str_menu.dhcpServerMain					=  "DHCP";				
str_menu.dhcpServer						=  "Configurações";	
str_menu.dhcpList						=  "Lista de Clientes DHCP";
str_menu.dhcpFixMap						=  "Reserva de Endereços";  

/* added by kuangguiming 26Sep12 for WR842ND2.0 VPN */
str_menu.vpnMain						=  "VPN";
str_menu.vpnIke							=  "IKE";
str_menu.vpnIpsec						=  "IPsec";
str_menu.vpnSaList						=  "Security Alliance List";
/* end add by kuangguiming 26Sep12 */

// modified by HouXB
str_menu.nasMain						=	"Configurações USB";
str_menu.nasCfg							= 	"Compartilhamento de de Armazenagem";
//added by Zhao C.F.
str_menu.nasFtpCfg						=	"Servidor FTP";
str_menu.nasUserCfg						= 	"Contas de Usuário";
                                         
/* add media server menu by HouXB, 16Sep10 */
str_menu.nasMediaSvCfg					=	"Servidor de Media";
/* end add by HouXB, 16Sep10 */

/* added by tf, 110421 */
str_menu.nasPrintSvCfg					=	"Servidor de Impressão";
/* end added */                                     
                                         
//added by hwz,2010-11-22 
str_menu.nat							=	"NAT";

str_menu.frwVrtMain						=  "Redirecionamento de Portas"; 			
str_menu.frwVrtServer					=  "Servidores Virtuais";	
str_menu.frwSpcApp						=  "Aplicações Especiais"; 
str_menu.frwDMZ							=  "Área DMZ";                              	                        

/* for Smart DMZ */
str_menu.frwSmartDMZ					=  "DMZ/Smart DMZ";
str_menu.frwUpnp						=  "UPnP";	
                                         	
// Added by WSY
str_menu.securityMain					=	"Firewall";
str_menu.basicSecurity					=	"Segurança Básica";
str_menu.localManageControl				=	"Gerenciamento Local";	
                                         	
str_menu.scrWzdFrwMain					=  "Segurança";		
str_menu.scrWzdFrw						=  "Firewall"; 
str_menu.scrFrwMain                     =  "Segurança"; 			
str_menu.scrFrw							=  "Firewall";
str_menu.scrWanIpFlt					=  "Filtrar IP";
str_menu.scrDomainFlt					=  "Filtrar Domínio"		
str_menu.scrmacFlt						=  "Filtrar MAC";
str_menu.scrMagControl					=  "Gerenciamento Remoto";			
str_menu.scrScreen						=  "Tela"; 	
str_menu.scrAdvScr						=  "Segurança Avançada";
str_menu.scrPing						=  "Ping"; 		                       		                  
str_menu.scrWanPing						=  "WAN Ping";	
                                         		
//add by caishaoji, 08.11.31
str_menu.parentCtrl						=	"Controle dos Pais";

str_menu.accCtrlMain					=	"Controle de Acesso";
str_menu.accCtrlHost					=	"Estações";
str_menu.accCtrlTarget					=	"Alvos";
str_menu.accCtrlTime					=	"Horários";
str_menu.accCtrlMan						=	"Regras";
//add end	
                                         		
str_menu.staRoute						=  "Roteamento";
str_menu.staRouteTable                  =   "Rotas Estáticas";
str_menu.sysRouteTable					=   "Tabela de Roteamento";
                                         	
str_menu.sessionMain					=  "Principal sessão";	
str_menu.sessionLimit					=  "Limite de sessão";
str_menu.sessionList					=  "Lista de sessão"; 
   
str_menu.QosCfgMain						=  "Controle de Banda";	
str_menu.QosCfg							=  "Parâmetros";	
str_menu.QosRuleList					=  "Lista de Regras";
      
str_menu.lanArpMain						=  "Vincular IP & MAC";		
str_menu.lanArpBind						=  "Vincular IP & MAC"; 	
str_menu.lanArpList						=  "Lista ARP"; 		
         
str_menu.ddnsAddMain					=  "DNS Dinâmico";
   
                                         	
str_menu.swtMain						=  "Configurações do Switch"; 	
str_menu.swtPortSta						=  "Estatísticas da Porta"; 	
str_menu.swtPortMirror					=  "Porta modelo"; 		
str_menu.swtPortRateSet					=  "Taxa de Configuração da Porta";
str_menu.swtPortPara					=  "Configuração da Porta";		
str_menu.swtPortStatus					=  "Estado da Porta";		
     
str_menu.swtPortBaseVlan				=  "Porta VLAN";
                                         		
str_menu.systoolMain					=  "Ferramentas do Sistema";	
str_menu.sysTime						=  "Relógio";			
str_menu.sysDiagnostic					=  "Diagnóstico";
str_menu.sysSoftUpgrade					=  "Firmware";
str_menu.sysRstDefault					=  "Restaurar Sistema";
                                         
str_menu.sysBackupRst					=  "Salvar Configurações";
                                        		
str_menu.sysReboot						=  "Reiniciar";
str_menu.tr069Settings					=  "TR069";
str_menu.sysPassword					=  "Usuário e Senha";
str_menu.sysLog							=  "Histórico";
str_menu.sysWatchDog				=  "Watch Dog Ping";
str_menu.snmp							= "SNMP";
                                         
str_menu.sysLogSet						=  "Syslog";
                                         
str_menu.sysManageCnt					=  "Gerenciamento Remoto";
                                         
str_menu.sysSta							=  "Estatísticas";

str_menu.wanSpdDet						= "Detecção da Velocidade WAN";

str_menu.natShow						=  "Exibir NAT";

str_menu.natSrcPortSetting				= "Porta de Origem NAT";
                                       
str_menu.ProductMain					=  "Produto";

str_menu.wanBalancePolicy				= "Política de balanceamento";
