var	ERR_NO_ERROR											=0
var ERR_FS_FILE_OPEN_FAILED									=10

var	ERR_PPPOE_FIXED_IP										=1000
var	ERR_PPPOE_TIMING_SET									=1001
var	ERR_PPPOE_STRING_TOO_LONG								=1002
var	ERR_PPPOE_USERNAME_TOO_LONG								=1003
var	ERR_PPPOE_PWD_TOO_LONG									=1004
var	ERR_PPPOE_AUTO_OFF_WAITE_TIME							=1005
var	ERR_PPPOE_LCP_MRU										=1006
var	ERR_PPPOE_ECHO_REQ_INTERVAL								=1007

var	ERR_DHCP_SERVER_ADDR_POOL_ERROR							=2000
var	ERR_DHCP_SERVER_GATEWAY_ERROR							=2001
var	ERR_DHCP_SERVER_DNS_ERROR								=2002
var	ERR_DHCP_SERVER_BAK_DNS_ERROR							=2003
var	ERR_DHCP_SERVER_LEASE									=2004
var	ERR_DHCP_SERVER_START_IP_ADDR							=2005
var	ERR_DHCP_SERVER_END_IP_ADDR								=2006
var	ERR_DHCP_SERVER_START_BIGGER_END						=2007
var	ERR_DHCP_SERVER_ADD_RANGE								=2008

var	ERR_FIX_MAP_MAC_ADDR_ERROR								=3000
var	ERR_FIX_MAP_IP_ADDR_ERROR								=3001
var	ERR_FIX_MAP_REC_EXIST									=3002
var	ERR_FIX_MAP_PAGE_NUM_ERROR								=3003
var	ERR_FIX_MAP_RECORD_ALREADY_FULL							=3004
var	ERR_FIX_MAP_RECORD_MAC_ALREADY_EXIST					=3005
var	ERR_FIX_MAP_RECORD_IP_ALREADY_EXIST						=3006
var ERR_FIX_MAP_IP_EQUAL_LANIP								=3007

var	ERR_STATIC_ROUTR_ENABLE									=4000
var	ERR_STATIC_ROUTR_DESTINATION_IP							=4001
var	ERR_STATIC_ROUTR_SUBNETMASK_IP							=4002
var ERR_STATIC_ROUTR_SUBNETMASK_DISMATCH_IP					=4003
var	ERR_STATIC_ROUTR_GATEWAY_IP								=4004
var	ERR_STATIC_ROUTR_NOEMPTY								=4005
var	ERR_STATIC_ROUTR_DUPLICATION							=4006
var	ERR_STATIC_ROUTR_DEFAULT_GATEWAY						=4007
var	ERR_STATIC_ROUTR_NOT_SAME_NETWORK						=4008
var	ERR_STATIC_ROUTR_CONFLICT_LAN_WAN						=4009
var	ERR_STATIC_DEST_CONFLICT_LAN							=4010
var	ERR_STATIC_DEST_CONFLICT_WAN							=4011
var	ERR_STATIC_ROUTR_ALREADY_FULL							=4012
var	ERR_STATIC_ROUTR_SAVE									=4013
var	ERR_STATIC_ROUTR_OTHER									=4014
var	ERR_WAN_DOWN_BANDWIDTH									=4015
var	ERR_WAN_UP_BANDWIDTH									=4016

var	ERR_NETWORK_MTU											=5000
var	ERR_LAN_IP_ERROR										=5001
var	ERR_LAN_MASK_ERROR										=5002
var	ERR_WAN_IP_ERROR										=5003
var	ERR_WAN_MASK_ERROR										=5004
var	ERR_WAN_DNS_ERROR										=5005
var	ERR_WAN_BACKDNS_ERROR									=5006
var	ERR_WAN_GATE_ERROR										=5007
var	ERR_WAN_LAN_CONFLICT									=5008
var	ERR_WAN_TYPE											=5009
var	ERR_LAN_IP_SET											=5010
var	ERR_LAN_MASK_SET										=5011
var	ERR_WAN_IP_SERVER										=5012
var	ERR_WAN_IP_SET											=5013
var	ERR_WAN_MASK_SET										=5014
var	ERR_WAN_DNS_SET											=5015
var	ERR_WAN_GATE_SET										=5016
var	ERR_WAN_MAC_ADDR										=5017
var	ERR_WAN_MAC_DUPLICATE									=5018
var	ERR_WAN_MAC_EQ_LAN_MAC									=5019
var	ERR_SNTP_MONTH											=5020
var	ERR_SNTP_DAY											=5021
var	ERR_SNTP_YEAR											=5022
var	ERR_SNTP_HOUR											=5023
var	ERR_SNTP_MINUTE											=5024
var	ERR_SNTP_SECOND											=5025
var	ERR_SNTP_TIME_SET										=5026
var	ERR_SNTP_TIMEZONE										=5027
var	ERR_SNTP_GET_GMT_FAILED									=5028
var ERR_SAME_WAN_IP										    =5029
var ERR_SNTP_SERVER_A                                       =5030
var ERR_SNTP_SERVER_B                                       =5031 
var ERR_SERVER_IP_ERROR	                                    =5032

var	ERR_MORNITOR_PORT_ACTIVE_PORT							=6000
var	ERR_MORNITOR_PORT_PASSIVE_PORT							=6001
var	ERR_MORNITOR_PORT_EQUAL_PORT							=6002
var	ERR_MORNITOR_NONE_PORT									=6003

var	ERR_TFTP_OVER_FILE_LEN									=7000
var	ERR_TFTP_IP_ERROR										=7001

var	ERR_FIREWALL_START_TIME_FORMAT_ERROR					=8000
var	ERR_FIREWALL_END_TIME_FORMAT_ERROR						=8001
var	ERR_FIREWALL_TIME_START_BIGGER_END						=8002
var	ERR_FIREWALL_LAN_IP_FORMAT_ERROR						=8003
var	ERR_FIREWALL_LAN_PORT_FORMAT_ERROR						=8004
var	ERR_FIREWALL_WAN_IP_FORMAT_ERROR						=8005
var	ERR_FIREWALL_WAN_PORT_FORMAT_ERROR						=8006
var	ERR_FIREWALL_PROTOCOL_TYPE_ERROR						=8007
var	ERR_FIREWALL_RECORD_ALREADY_EXIST						=8008
var	ERR_FIREWALL_IP_RECORD_ALREADY_FULL						=8009

var	ERR_FIREWALL_DOMAIN_NAME_LEN_OVER						=9000
var	ERR_FIREWALL_DOMAIN_NAME_ERROR							=9001
var	ERR_FIREWALL_DOMAIN_IS_SUBSET							=9002
var	ERR_FIREWALL_DOMAIN_RECORD_ALREADY_FULL					=9003

var	ERR_FIREWALL_TIME_NOT_FULL								=10000
var	ERR_FIREWALL_TIME_FORMAT_ERROR							=10001
var	ERR_FIREWALL_WZD_TIME_ALREADY_EXIST						=10002
var	ERR_FIREWALL_WZD_TIME_IS_SUBSET							=10003
var	ERR_FIREWALL_WZD_IP_FORMAT_ERROR						=10004
var	ERR_FIREWALL_WZD_ADDR_ALREADY_EXIST						=10005
var	ERR_FIREWALL_WZD_PORT_FORMAT_ERROR						=10006
var	ERR_FIREWALL_WZD_PORT_IS_SUBSET							=10007

var	ERR_MAC_FILTER_PAGE_NUM_ERROR							=11000
var	ERR_MAC_FILTER_RECORD_ALREADY_EXIST						=11001
var	ERR_MAC_FILTER_RECORD_ALREADY_FULL						=11002
var	ERR_MAC_FILTER_FORMAT_ERROR								=11003

var	ERR_REMOTE_MANAGE_IP_FORMAT_ERROR						=12000
var	ERR_REMOTE_MANAGE_PORT_FORMAT_ERROR						=12001
var	ERR_REMOTE_MANAGE_PORT_OUT_OF_RANGE						=12002
var	ERR_REMOTE_MANAGE_PORT_OCCUPIED_PORT					=12003
var	ERR_REMOTE_MANAGE_PORT_CONFLICT_PORT					=12004

var	ERR_DMZ_HOST_IP_ADDR									=13000
var ERR_DMZ_IP_IS_DEV_IP									=13001
var	ERR_VS_PAGE_NUM_ERROR									=14000
var	ERR_VS_PORT_OUT_RANGE									=14001
var	ERR_VS_PORT_FORMAT_ERROR								=14002
var	ERR_VS_IP_ADDRESS										=14003
var	ERR_VS_RECORD_ALREADY_EXIST								=14004
var	ERR_VS_PROTOCOL_TYPE_ERROR								=14005
var	ERR_VS_RECORD_ALREADY_FULL								=14006

var	ERR_SPECIAL_APP_PUBLIC_PORT								=15000
var	ERR_SPECIAL_APP_DUPLICATE_PUBLIC_PORT					=15001
var	ERR_SPECIAL_APP_DUPLICATE_TAG_PORT						=15002
var	ERR_SPECIAL_APP_RECORD_ALREADY_FULL						=15003

var	ERR_DDNS_USER_NAME_EMPTY								=16000
var	ERR_DDNS_PWD_EMPTY										=16001
var	ERR_DDNS_USER_HAS_SPACE									=16002
var	ERR_DDNS_PWD_HAS_SPACE									=16003
var	ERR_DDNS_LIST_FULL										=16004
var	ERR_DDNS_LIST_INDEX_OUT_RANGE							=16005
var	ERR_DDNS_ENTRY_BE_DELETE								=16006

var	ERR_USER_NAME_LENGTH									=17000
var	ERR_USER_PWD_LENGTH										=17001
var	ERR_USER_NAME_ERROR										=17002
var	ERR_USER_PWD_ERROR										=17003
var	ERR_USER_PWD_INVALID_CHAR								=17004

var	ERR_SYS_TFTP_FAIL										=18000
var	ERR_SYS_TFTP_FILE_LENGTH								=18001
var	ERR_SYS_TFTP_SERVNOTFOUND								=18002
var	ERR_SYS_ERR_SOCKET										=18003
var	ERR_SYS_FAIL											=18004
var	ERR_SYS_FILE_VER										=18005
var ERR_SYS_DAYLIGHTSAVING_WRONG 							=18006

var	ERR_SESSION_LIMIT_TBL_FULL								=19000
var	ERR_SESSION_LIMIT_RECORD_ALREADY_FULL					=19001
var	ERR_SESSION_LIMIT_RECORD_ALREADY_EXIST					=19002

var	ERR_ARP_REC_IP_EXIST									=20000
var	ERR_ARP_FIXMAP_FULL										=20001
var	ERR_ARP_REC_IP_EXIST_ADD_SUCC							=20002
var	ERR_ARP_REC_IP_EXIST_ADD_FAIL							=20003
var	ERR_ARP_IP_EXIST_AND_FIXMAP_FULL						=20004
var	ERR_ARP_FIXMAP_FULL_IGNORE_OTHER_ENTRYS					=20005
var ERR_ARP_FIXMAP_MAC_ERR									=20006
var ERR_ARP_IP_SAME_AS_LANIP                                =20007

var	ERR_SYS_LOG_SYS_STATUS									=21000
var	ERR_SYS_LOG_SRV_ID										=21001
var	ERR_SYS_LOG_SRV_STATUS									=21002
var	ERR_SYS_LOG_SRV_ADDRESS									=21003
var	ERR_SYS_LOG_SRV_ADDR_EXIST								=21004
var	ERR_SYS_LOG_SRV_PORT									=21005
var	ERR_SYS_LOG_SETTING_EMERGENCY							=21006
var	ERR_SYS_LOG_SETTING_ALERT								=21007
var	ERR_SYS_LOG_SETTING_CRITICAL							=21008
var	ERR_SYS_LOG_SETTING_ERROR								=21009
var	ERR_SYS_LOG_SETTING_WARNING								=21010
var	ERR_SYS_LOG_SETTING_NOTICE								=21011
var	ERR_SYS_LOG_SETTING_INFORMATIONAL						=21012
var	ERR_SYS_LOG_SETTING_DEBUG								=21013
var	ERR_SYS_LOG_SETTING_EMPTY								=21014

var	ERR_FIREWALL_SYSLOG_SERVER_INVALID_ID					=22000
var	ERR_FIREWALL_SYSLOG_SERVER_NOT_DEFINED					=22001
var	ERR_FIREWALL_SCREEN_UNKNOWN_DEFENCE						=22002
var	ERR_FIREWALL_SCREEN_SCAN_THRESHOLD						=22003
var	ERR_FIREWALL_SCREEN_DOS_THRESHOLD						=22004

var	ERR_TDDP_UPLOAD_FILE_TOO_LONG							=23000
var	ERR_TDDP_UPLOAD_FILE_FORMAT_ERR							=23001
//added by ZQQ,08.05.19 the upload file is too big
var ERR_TDDP_UPLOAD_FILE_NAME_ERR                           =23002
var ERR_TDDP_UPLOAD_PRODUCT_INFO_ERR                        =23003

var	ERR_COMMON_ERROR										=25000
var	ERR_TDDP_DOWNLOAD_FILE_TOO_LONG							=25001
var ERR_VS_RECORD_CONFLICT_REMOTE_WEB_PORT                  =25002
var ERR_VS_RECORD_CONFLICT_FTP_PORT							=25004

var	ERR_DST_HOUR											=26000
var	ERR_DST_DAY												=26001
var	ERR_DST_MONTH											=26002
var	ERR_DST_BEGIN_END										=26003

var	ERR_WLAN_CONFIG_BASE									=26100
var	ERR_WLAN_CONFIG_SECURITY								=26101
var	ERR_WLAN_CONFIG_KEY										=26102
var	ERR_WLAN_MAC_FILTER_PAGE_NUM_ERROR						=26103
var	ERR_WLAN_MAC_FILTER_RECORD_ALREADY_EXIST				=26104
var	ERR_WLAN_MAC_FILTER_RECORD_ALREADY_FULL					=26105
/*wifi*/
var ERR_IP_NOT_IN_THE_SAME_SUBNET                           =26106
var ERR_WLAN_SSID_LEN                                       =26107
var ERR_WLAN_REGION                                         =26108
var ERR_WLAN_CHANNEL_WIDTH                                  =26109
var ERR_WLAN_STATIC_RATE                                    =26110
var ERR_WLAN_MODE                                           =26111      
var ERR_WLAN_OPER_MODE										=26112
var ERR_WLAN_BROADCAST                                      =26113
var ERR_WLAN_MAC_ADDR_INVALID                               =26114  
var ERR_WLAN_RADIUS_IP_INVALID                              =26115
var ERR_WLAN_MODE_UNSUPPORT_CFG								=26116

//qos

var ERR_QOS_TOTAL_EGRESS_100M								= 27000	/* ZJin 090903: make the err msg more detailedly */
var ERR_QOS_TOTAL_INGRESS_100M								= 27001
var ERR_QOS_TOTAL_EGRESS_1000M								= 27002
var ERR_QOS_TOTAL_INGRESS_1000M								= 27003
var ERR_QOS_NOBUF											= 27004
var ERR_QOS_NOENT											= 27005/* rule not exsited*/
var ERR_QOS_EXIST											= 27006/* rule existed*/
var ERR_QOS_USEDBW											= 27007/* total limit is less than assigned band*/
var ERR_QOS_NOBW											= 27008/* total limit is less than assigned band*/
var ERR_QOS_BADRULE											= 27009/* rule is conflict*/
var ERR_QOS_TYPE											= 27010/* err type*/
var ERR_QOS_MAX												= 27011/*the max error code */
var ERR_QOS_INGRESS_BANDWIDTH								= 27012/*download bandwidth is greater than total limit*/
var ERR_QOS_EGRESS_BANDWIDTH								= 27013/*upload bandwidth is greater than total limit*/

/*parental control*/
var ERR_PARENT_CTRL_FULL									=28000
var ERR_PARENT_CTRL_URLDESC									=28001
var ERR_PARENT_CTRL_SAME_MAC_WITH_PARENT					=28002
/*access control*/
var ERR_ACC_CTRL_HOST_FULL									=29000
var ERR_ACC_CTRL_TARGET_FULL								=29001
var ERR_ACC_CTRL_SCHEDULE_FULL								=29002
var ERR_ACC_CTRL_RULE_FULL									=29003
var ERR_ACC_CTRL_SAME_NAME									=29004
var ERR_ACC_CTRL_REFERED									=29005
var ERR_ACC_CTRL_RULE_CONFLICT								=29006
var ERR_ACC_PARTIAL_DEL										=29007
var ERR_ACC_DEL_NONE										=29008
var ERR_FILTER_MAC											=29009
var ERR_ACC_CTRL_HOST_IPSTART								=29010
var ERR_ACC_CTRL_HOST_IPEND									=29011
var ERR_ACC_CTRL_TARGET_IPSTART								=29012
var ERR_ACC_CTRL_TARGET_IPEND								=29013
var ERR_ACC_CTRL_HOST_IPSTART_NOT_IN_THE_SAME_SUBNET		=29014
var ERR_ACC_CTRL_HOST_IPEND_NOT_IN_THE_SAME_SUBNET			=29015

//USB Settings
var ERR_NAS_ACCOUNT_DUPLICATE								=33000				/* same account */
var	ERR_NAS_TOO_MANY_USER									=33001						/* user number limit */
var	ERR_FTP_SHAREFOLDER_DUPLICATE							=33002				/* */
var	ERR_FTP_TOO_MANY_SHAREFOLDER							=33003				/* folder is too many */
var ERR_FTP_INVALID_PORT									=33004				/* ftp server port conflict */
var ERR_NAS_ACCOUNT_CONFLICT_GUESTNETWORK					=33005
var ERR_INVALID_FLODER_PATH									=33006				/* ftp share folder invalid */

//VPN stuff
var ERR_VPN_SAME_NAME										=34000
var ERR_VPN_IKE_TABLE_FULL									=34001
var ERR_VPN_IKE_CONFLICT									=34002
var ERR_VPN_IKE_REFERED										=34003
var ERR_VPN_INDEX_NO_EXISTED								=34004
var ERR_VPN_DEL_PARTIAL										=34005
var ERR_VPN_DEL_NONE										=34006
var ERR_VPN_LOCAL_ID										=34007
var ERR_VPN_PEER_ID											=34008
var ERR_VPN_LOCAL_NET_IP									=34009
var ERR_VPN_LOCAL_NET_MSK									=34010
var ERR_VPN_PEER_NET_IP										=34011
var ERR_VPN_PEER_NET_MSK									=34012
var ERR_VPN_PEER_GW											=34013
var ERR_VPN_IPSEC_TABLE_FULL								=34014
var ERR_VPN_IPSEC_CONFLICT									=34015
var ERR_VPN_OTHER_ERROR										=34016
var ERR_VPN_SPI												=34017
var ERR_VPN_SAD_INVALID										=34018
var ERR_VPN_AUTH_KEY_INVALID								=34019
var ERR_VPN_ENCRYPT_KEY_INVALID								=34020
var ERR_VPN_STATIC_ROUTE_CONFLICT                           =34021


var ERR_USB_MODEM_LIST_FULL 								= 50000
var ERR_USB_MODEM_LIST_UPLOAD_TOO_MANY_ENTRIES				= 50001
var ERR_USB_MODEM_LIST_UPLOAD_PARSE_FAILED					= 50002
var ERR_USB_MODEM_ENTRY_ALREADY_EXIST						= 50003                           
						
//IPv6
var ERR_IPV6_STATICIP_ERROR_GATEWAY							=51000
						
var str_err = new Array();
str_err[ERR_NO_ERROR]							=	"Ocorreu um erro. Por favor, tente novamente.";
str_err[ERR_PPPOE_FIXED_IP]						=	"Endereço IP especificado incorretamente. Por favor digite outro.";
str_err[ERR_PPPOE_TIMING_SET]					=	"A configuração da conexão com base no tempo está incorreta.";
str_err[ERR_PPPOE_STRING_TOO_LONG]				=	"A string PPPOE é muito longa.";
str_err[ERR_PPPOE_USERNAME_TOO_LONG]			=	"O nome de usuário está fora de comprimento (119). Por favor digite outra.";
str_err[ERR_PPPOE_PWD_TOO_LONG]					=	"A senha está fora de comprimento (119). Por favor digite outra.";
str_err[ERR_PPPOE_AUTO_OFF_WAITE_TIME]			=	"O máximo de tempo ocioso está fora do intervalo (10-99). Por favor digite outro número.";
str_err[ERR_PPPOE_LCP_MRU]						=	"MTU está fora de alcance (576 - 1500). Por favor digite outro número.";
str_err[ERR_PPPOE_ECHO_REQ_INTERVAL]			=	"Segundos de intervalo está fora do intervalo. Por favor digite outro entre 0 ~ 120";
str_err[ERR_DHCP_SERVER_ADDR_POOL_ERROR]		=	"Faixa de endereços IP está incorreta. Por favor, tente novamente.";
str_err[ERR_DHCP_SERVER_GATEWAY_ERROR]			=	"Endereço de Gateway inválido. Por favor digite outro.";
str_err[ERR_DHCP_SERVER_DNS_ERROR]				=	"Endereço IP do servidor DNS primário inválido. Por favor digite outro.";
str_err[ERR_DHCP_SERVER_BAK_DNS_ERROR]			=	"Endereço IP do servidor DNS secundário inválido. Por favor digite outro.";
str_err[ERR_DHCP_SERVER_LEASE]					=	"Tempo de concessão de endereços está fora do intervalo (1 a 2880). Por favor tente outra vez.";
str_err[ERR_DHCP_SERVER_START_IP_ADDR]			=	"Faixa de endereços IP inicial inválida. Por favor digite outra.";
str_err[ERR_DHCP_SERVER_END_IP_ADDR]			=	"Faixa de endereços IP final inválida. Por favor digite outra.";
str_err[ERR_DHCP_SERVER_START_BIGGER_END]		=	"O endereço IP inicial é maior do que o endereço IP final.";
str_err[ERR_DHCP_SERVER_ADD_RANGE]				=	"A faixa de endereços IP está fora do intervalo (256). Por favor digite outra.";
str_err[ERR_FIX_MAP_MAC_ADDR_ERROR]				=	"Endereço MAC inválido. Por favor digite outro.";
str_err[ERR_FIX_MAP_IP_ADDR_ERROR]				=	"Endereço IP inválido. Por favor digite outro.";
str_err[ERR_FIX_MAP_REC_EXIST]					=	"A entrada já existe. Por favor digite outra.";
str_err[ERR_FIX_MAP_PAGE_NUM_ERROR]				=	"A página do endereço IP estático está incorreta. Por favor, tente novamente.";
str_err[ERR_FIX_MAP_RECORD_ALREADY_FULL]		=	"A tabela de endereços reservados DHCP já está cheia.";
str_err[ERR_FIX_MAP_RECORD_MAC_ALREADY_EXIST]	=	"Outra entrada com o mesmo MAC já existe.";
str_err[ERR_FIX_MAP_RECORD_IP_ALREADY_EXIST]	=	"Outra entrada com o mesmo IP já existe.";
str_err[ERR_FIX_MAP_IP_EQUAL_LANIP]				=	"Endereço IP deve ser diferente da rede IP.";
str_err[ERR_STATIC_ROUTR_ENABLE]				=	"O valor está incorreto.";
str_err[ERR_STATIC_ROUTR_DESTINATION_IP]		=	"Endereço IP de destino inválido. Por favor digite outro.";
str_err[ERR_STATIC_ROUTR_SUBNETMASK_IP]			=	"Máscara inválida. Por favor, introduzir uma máscara correta. <br> Exemplo 255.255.255.0.";
str_err[ERR_STATIC_ROUTR_SUBNETMASK_DISMATCH_IP]=	"A máscara de sub-rede não corresponde ao endereço de rede. Por favor, tente novamente.";
str_err[ERR_STATIC_ROUTR_GATEWAY_IP]			=	"Endereço de Gateway inválido. Por favor digite outro endereço.";
str_err[ERR_STATIC_ROUTR_NOEMPTY]				=	"A tabela de roteamento estático não está vazia.";
str_err[ERR_STATIC_ROUTR_DUPLICATION]			=	"A entrada de roteamento estático já existe. Por favor, tente novamente.";
str_err[ERR_STATIC_ROUTR_DEFAULT_GATEWAY]		=	"O endereço de entrada é padrão Gateway. Por favor, defina-o no menu da rede.";
str_err[ERR_STATIC_ROUTR_NOT_SAME_NETWORK]		=	"O endereço de Gateway deve estar na mesma sub-rede das interfaces WAN ou LAN.";
str_err[ERR_STATIC_ROUTR_CONFLICT_LAN_WAN]		=	"Os parâmetros de IP das interfaces WAN ou LAN estão em conflito com a entrada de roteamento estático. Por favor, tente novamente.";
str_err[ERR_STATIC_DEST_CONFLICT_LAN]			=	"Destination Network address cannot be in the same subnet with LAN IP address, please enter again.";
str_err[ERR_STATIC_DEST_CONFLICT_WAN]			=	"Destination Network address cannot be inside the subnet of WAN IP address, please enter again.";
str_err[ERR_STATIC_ROUTR_ALREADY_FULL] 			=	"A tabela de roteamento estático já está cheia.";
str_err[ERR_STATIC_ROUTR_SAVE]					=	"Falha ao salvar!";
str_err[ERR_STATIC_ROUTR_OTHER]					=	"Outro erro ocorreu.";
str_err[ERR_WAN_DOWN_BANDWIDTH]					=	"A banda de download está fora de alcance. Por favor digite outra (0-10000).";
str_err[ERR_WAN_UP_BANDWIDTH]					=	"A banda de upload está fora de alcance. Por favor digite outra (0-10000).";
//qos
str_err[ERR_QOS_NOBW]							=	"O sistema não pode satisfazer a largura de banda requerida. Por favor tente de novo.";
str_err[ERR_QOS_TOTAL_EGRESS_100M]				=	"A Banda de saída está fora de alcance. Por favor digite outra (1-100000). Recomendado que você defina a largura de banda alocada pelo seu provedor.";
str_err[ERR_QOS_TOTAL_INGRESS_100M]				=	"A Banda de entrada está fora de alcance. Por favor digite outra (1-100000). Recomendado que você defina a largura de banda alocada pelo seu provedor.";
str_err[ERR_QOS_TOTAL_EGRESS_1000M]				=	"A Banda de saída está fora de alcance. Por favor digite outra (1-1000000). Recomendado que você defina a largura de banda alocada pelo seu provedor.";
str_err[ERR_QOS_TOTAL_INGRESS_1000M]			=	"A Banda de entrada está fora de alcance. Por favor digite outra (1-1000000). Recomendado que você definir a largura de banda alocada pelo seu provedor.";
str_err[ERR_QOS_BADRULE]						=   "A regra que você adicionar está em conflito com uma regra existe. Por favor, tentar novamente.";

str_err[ERR_NETWORK_MTU]						=	"MTU incorreta. Por favor insira outro número (576 ~ 1500).";
str_err[ERR_LAN_IP_ERROR]						=	"Endereço IP da LAN inválido. Por favor digite outro.";
str_err[ERR_LAN_MASK_ERROR]						=	"Máscara de rede para LAN inválida. Por favor digite outra.";
str_err[ERR_WAN_IP_ERROR]						=	"Endereço IP WAN inválido. Por favor digite outro.";
str_err[ERR_WAN_MASK_ERROR]						=	"Máscara de rede para WAN inválida. Por favor digite outra. <br> Exemplo: 255.255.255.0.";
str_err[ERR_WAN_DNS_ERROR]						=	"Endereço IP do servidor DNS inválido. Por favor digite outro endereço IP. <br> Exemplo: 202.96.134.188.";
str_err[ERR_WAN_BACKDNS_ERROR]					=	"Endereço IP servidor DNS secundário inválido. Por favor digite outro endereço IP. <br> Por exemplo: 202.96.134.188.";
str_err[ERR_WAN_GATE_ERROR]						=	"Gateway para WAN inválido. Por favor digite outro.";
str_err[ERR_WAN_LAN_CONFLICT]					=	"Endereços IP da interface WAN e LAN não podem estar em uma mesma sub-rede. Por favor verifique.";
str_err[ERR_WAN_TYPE]							=	"Tipo de conexão à Internet inválido. Selecione um tipo de conexão à Internet apropriado.";
str_err[ERR_LAN_IP_SET]							=	"Falha ao definir endereço IP da interface LAN.";
str_err[ERR_LAN_MASK_SET]						=	"Falha ao definir máscara de sub-rede da interface LAN.";
str_err[ERR_WAN_IP_SERVER]						=	"O endereço IP do servidor está errado.";
str_err[ERR_WAN_IP_SET]							=	"Falha ao definir endereço IP da interface WAN.";
str_err[ERR_WAN_MASK_SET]						=	"Falha ao definir máscara de sub-rede da interface WAN.";
str_err[ERR_WAN_DNS_SET]						=	"Falha ao definir endereço DNS da interface WAN.";
str_err[ERR_WAN_GATE_SET]						=	"Falha ao definir gateway da interface WAN.";
str_err[ERR_WAN_MAC_ADDR]						=	"Falha ao definir endereço MAC da interface WAN.";
str_err[ERR_WAN_MAC_DUPLICATE]					=	"Duas ou mais interfaces WAN tem o mesmo MAC.";
str_err[ERR_WAN_MAC_EQ_LAN_MAC]				 	=	"O endereço MAC da WAN é igual ao endereço MAC da LAN. Por favor verifique.";
str_err[ERR_SNTP_MONTH]							=	"Formato errado do mês. Tente novamente (12/01)";
str_err[ERR_SNTP_DAY]							=	"Formato errado do dia. Tente novamente (31/01)";
str_err[ERR_SNTP_YEAR]							=	"Formato incorreto do ano. Por favor insira outro (1970-2037)";
str_err[ERR_SNTP_HOUR]							=	"Formato da hora errada. Por favor insira outro (0-23)";
str_err[ERR_SNTP_MINUTE]						=	"Formato errado de minutos. Por favor insira outro (0-59)";
str_err[ERR_SNTP_SECOND]						=	"Formato errado de segundos. Por favor insira outro (0-59)";
str_err[ERR_SNTP_TIME_SET]						=	"Definir a hora sem sucesso. Por favor, tente novamente.";
str_err[ERR_SNTP_TIMEZONE]						=	"Fuso horário incorreto. Por favor, escolher um fuso horário correto.";
str_err[ERR_SNTP_GET_GMT_FAILED]				=	"Problema ao tentar obter GMT. Certifique-se de que você já tenha conectado à Internet.";
str_err[ERR_SNTP_SERVER_A]						=	"O endereço do primeiro servidor NTP é inválido. Por favor digite outro.";
str_err[ERR_SNTP_SERVER_B]						=	"O endereço do segundo servidor NTP é inválido. Por favor digite outro.";
str_err[ERR_SERVER_IP_ERROR]                    =   "Endereço IP do servidor inválido. Por favor digite outro.";
str_err[ERR_MORNITOR_PORT_ACTIVE_PORT]			=	"A porta espelho ativa está em branco. Por favor digite outra.";
str_err[ERR_MORNITOR_PORT_PASSIVE_PORT]			=	"A porta espelho passiva está em branco. Por favor digite outra.";
str_err[ERR_MORNITOR_PORT_EQUAL_PORT]			=	"A porta espelho ativa não pode ser igual a porta espelho passiva. Selecione outra.";
str_err[ERR_MORNITOR_NONE_PORT]					=	"O índice de porta espelho está fora do alcance. Por favor digite outro.";
str_err[ERR_TFTP_OVER_FILE_LEN]					=	"O comprimento do nome do arquivo está incorreto. Por favor digite o arquivo com comprimento inferior a 20 caracteres.";
str_err[ERR_TFTP_IP_ERROR]						=	"Endereço IP do servidor TFTP de entrada é incorreto.";
str_err[ERR_FIREWALL_START_TIME_FORMAT_ERROR]	=	"Tempo inicial inválido. Por favor digite outro número no formato HHMM (24 horas).";
str_err[ERR_FIREWALL_END_TIME_FORMAT_ERROR]		=	"Tempo final inválido. Por favor digite outro número no formato HHMM (24 horas).";
str_err[ERR_FIREWALL_TIME_START_BIGGER_END]		=	"Tempo inicial não pode ser posterior ao tempo final de entrada. Por favor tente outra vez.";
str_err[ERR_FIREWALL_LAN_IP_FORMAT_ERROR]		=	"Endereço IP da LAN inválido. Por favor digite outro.";
str_err[ERR_FIREWALL_LAN_PORT_FORMAT_ERROR]		=	"Porta LAN está fora do intervalo (1 a 65534). Por favor digite outro número, como 8080.";
str_err[ERR_FIREWALL_WAN_IP_FORMAT_ERROR]		=	"Endereço IP WAN inválido. Por favor digite outro, como 61.145.238.5.";
str_err[ERR_FIREWALL_WAN_PORT_FORMAT_ERROR]		=	"Porta WAN está fora do intervalo (1 a 65534). Por favor digite outro número, como 8080.";
str_err[ERR_FIREWALL_PROTOCOL_TYPE_ERROR]		=	"Protocolo incorreto. Selecione uma posição correta.";
str_err[ERR_FIREWALL_RECORD_ALREADY_EXIST]		=	"Esta entrada de filtragem de IP já existe.";
str_err[ERR_FIREWALL_IP_RECORD_ALREADY_FULL]	=	"A lista de inscritos na filtragem IP já está na capacidade máxima: 8.";
str_err[ERR_FIREWALL_DOMAIN_NAME_LEN_OVER]		=	"Nome de domínio tem comprimento máximo em 30 caracteres. Por favor digite outro.";
str_err[ERR_FIREWALL_DOMAIN_NAME_ERROR]			=	"Nomes de domínio inválidos. Por favor digite outro.";
str_err[ERR_FIREWALL_DOMAIN_IS_SUBSET]			=	"Nomes de domínio sobrepostos. Por favor verifique.";
str_err[ERR_FIREWALL_DOMAIN_RECORD_ALREADY_FULL]=	"Lista de entrada de filtragem de domínios já está na capacida máxima: 8.";
str_err[ERR_FIREWALL_TIME_NOT_FULL]				=	"Se você deseja definir o tempo, você deve entrar com dois horários - inicial e final.";
str_err[ERR_FIREWALL_TIME_FORMAT_ERROR]			=	"Formato da hora inválido. Por favor digite outro número no formato HHMM (24 horas).";
str_err[ERR_FIREWALL_WZD_TIME_ALREADY_EXIST]	=	"A faixa de entrada está em conflito com outra entrada.";
str_err[ERR_FIREWALL_WZD_TIME_IS_SUBSET]		=	"A faixa de entrada está contida em outra entrada.";
str_err[ERR_FIREWALL_WZD_IP_FORMAT_ERROR]		=	"Endereço inválido. Por favor digite outro endereço IP ou um intervalo de endereços IP ou nome de domínio. <br> Se você introduzir um intervalo de endereços IP, certifique-se que o endereço IP e endereço IP final estão na mesma sub-rede e estão disponíveis.";
str_err[ERR_FIREWALL_WZD_ADDR_ALREADY_EXIST]	=	"O Endereço IP ou nome de domínio está em conflito.";
str_err[ERR_FIREWALL_WZD_PORT_FORMAT_ERROR]		=	"Número incorreto de porta<br>. Por favor, introduzir outro número de porta (1-65534) ou um intervalo de portas com duas vírgulas‘ ’para separar várias portas. <br>Se é a porta de entrada, certifique-se que o número está disponível, tais como 8080 ou 2300-9600 <br>.";
str_err[ERR_FIREWALL_WZD_PORT_IS_SUBSET]		=	"A porta de entrada está contida ou igualada por outra porta de entrada.";
str_err[ERR_MAC_FILTER_PAGE_NUM_ERROR]			=	"O número de página do filtro de endereços MAC é inválido. Por favor, tente novamente.";
str_err[ERR_MAC_FILTER_RECORD_ALREADY_EXIST]	=	"A entrada já existe. Por favor digite outra.";
str_err[ERR_MAC_FILTER_RECORD_ALREADY_FULL]		=	"Filtragem de endereços MAC já está na capacidade máxima: 16.";
str_err[ERR_REMOTE_MANAGE_IP_FORMAT_ERROR]		=	"Endereço IP inválido. Por favor digite outro.";
str_err[ERR_REMOTE_MANAGE_PORT_FORMAT_ERROR]	=	"Porta incorreta. Por favor digite outra.";
str_err[ERR_REMOTE_MANAGE_PORT_OUT_OF_RANGE]	=	"A porta está fora do intervalo (1-65534). Por favor digite outra.";
str_err[ERR_REMOTE_MANAGE_PORT_OCCUPIED_PORT]	=	"O número da porta para gerenciamento remoto não é suportado (21, 25, 110, 119, 139, 145, 445 etc.), por favor insira novamente.";

str_err[ERR_REMOTE_MANAGE_PORT_CONFLICT_PORT]	=	"The port of the remote web management is conflicting with of the virtual server.";

str_err[ERR_DMZ_HOST_IP_ADDR]					=	"Estação DMZ inválida. Por favor digite outra.";
str_err[ERR_DMZ_IP_IS_DEV_IP]					=	O endereço IP do host DMZ não pode ser utilizado por dispositivos. Por favor, insira novamente.";
str_err[ERR_VS_PAGE_NUM_ERROR]					=	"O número de página do servidor virtual é inválida. Por favor, tente novamente.";
str_err[ERR_VS_PORT_OUT_RANGE]					=	"A porta está fora do intervalo (1-65534). Por favor digite outra.";
str_err[ERR_VS_PORT_FORMAT_ERROR]				=	"Formato de Porta está incorreto. Você pode introduzir uma porta ou um intervalo de portas, como 1024-2048.";
str_err[ERR_VS_IP_ADDRESS]						=	"Endereço IP está incorreto. Por favor digite outro.";
str_err[ERR_VS_RECORD_ALREADY_EXIST]			=	"A entrada já existe ou a sua porta é contido por uma outra.";
str_err[ERR_VS_PROTOCOL_TYPE_ERROR]				=	"Tipo de protocolo inválido. Por favor, selecione novamente.";
str_err[ERR_VS_RECORD_ALREADY_FULL]				=	"Número de entradas do Servidor Virtual atingiu capacidade máxima: 16.";
str_err[ERR_SPECIAL_APP_PUBLIC_PORT]			=	"O formato da porta de entrada errada. Por favor digite outra.";
str_err[ERR_SPECIAL_APP_DUPLICATE_PUBLIC_PORT]	=	"A regra da porta de entrada conflita com outra regra existente. <b>As regras de porta de entrada não podem se igualar umas às outras, ou a configuração resultará em erro.";
str_err[ERR_SPECIAL_APP_DUPLICATE_TAG_PORT]		=	"A regra de disparo conflita com outra regra existente. <b>As regras de disparo não podem se igualar umas às outras, ou a configuração resultará em erro.";
str_err[ERR_SPECIAL_APP_RECORD_ALREADY_FULL]	=	"Lista de portas de disparo já está no limite máximo: 16.";
str_err[ERR_DDNS_USER_NAME_EMPTY]				=	"Nome do Usuário é inválido. Por favor digite outro.";
str_err[ERR_DDNS_PWD_EMPTY]						=	"A senha é inválida. Por favor digite outra.";
str_err[ERR_DDNS_USER_HAS_SPACE]				=	"Nome de usuário contém espaços. Por favor digite outro.";
str_err[ERR_DDNS_PWD_HAS_SPACE]					=	"A senha é inválida. Por favor digite outra.";
str_err[ERR_DDNS_LIST_FULL]						=	"Tabela DDNS já está cheia.";
str_err[ERR_DDNS_LIST_INDEX_OUT_RANGE]			=	"O índice está fora do intervalo.";
str_err[ERR_DDNS_ENTRY_BE_DELETE]				=	"Esse post foi apagado.";
str_err[ERR_USER_NAME_LENGTH]					=	"O nome de usuário está fora de comprimento 15. Por favor digite outro.";
str_err[ERR_USER_PWD_LENGTH]					=	"A senha está fora de comprimento 15. Por favor digite outro.";
str_err[ERR_USER_NAME_ERROR]					=	"Nome de usuário atual é incorreto. Por favor digite outro.";
str_err[ERR_USER_PWD_ERROR]						=	"A senha atual está incorreta. Por favor digite outro.";
str_err[ERR_USER_PWD_INVALID_CHAR]				=	"Nome de usuário ou senha contém caracteres ilegais. Por favor digite outro.";
str_err[ERR_SYS_TFTP_FAIL]						=	"Ocorreu um erro. Por favor, tente novamente.";
str_err[ERR_SYS_TFTP_FILE_LENGTH]				=	"Atualização sem sucesso, porque o tamanho do arquivo de atualização está incorreto. Por favor, verifique o nome do arquivo.";
str_err[ERR_SYS_TFTP_SERVNOTFOUND]				=	"Atualização sem sucesso. Certifique-se de ter lançado o servidor TFTP.";
str_err[ERR_SYS_ERR_SOCKET]						=	"Atualização sem sucesso. Certifique-se de ter lançado o servidor TFTP e o arquivo foi atualizado no diretório correto.";
str_err[ERR_SYS_FAIL]							=	"Transmissão de arquivo falhou. Verifique o nome do arquivo inserido.";
str_err[ERR_SYS_FILE_VER]						=	"Atualização sem sucesso, porque a versão do arquivo atualizado estava incorreta. Por favor, verifique o nome do arquivo.";
str_err[ERR_SYS_DAYLIGHTSAVING_WRONG]			=	"Horário de Verão inválido. Por favor verifique se os horário de início e fim são válidos.";
/* zqq,07.10.29*/
str_err[ERR_SESSION_LIMIT_TBL_FULL]				=	"A tabela de limite da sessão já está cheia.";
str_err[ERR_SESSION_LIMIT_RECORD_ALREADY_FULL]	=	"As sessões para um endereço IP estão cheias.";
str_err[ERR_SESSION_LIMIT_RECORD_ALREADY_EXIST]	=	"A entrada de limite da sessão já existe.";
str_err[ERR_ARP_REC_IP_EXIST]					=	"A entrada já existe. Por favor digite outra!";
str_err[ERR_ARP_FIXMAP_FULL]					=	"A proteção IP & MAC está cheia.";
str_err[ERR_ARP_REC_IP_EXIST_ADD_SUCC]			=	"Entradas em conflito foram ignoradas. Foram adicionadas somente entradas válidas.";
str_err[ERR_ARP_REC_IP_EXIST_ADD_FAIL]			=	"Todas as entradas a serem adicionadas estão em conflito com as entradas já existentes";
str_err[ERR_ARP_IP_EXIST_AND_FIXMAP_FULL]		=	"A proteção IP & MAC está cheia.";
str_err[ERR_ARP_FIXMAP_FULL_IGNORE_OTHER_ENTRYS]=	"A proteção IP & MAC está cheia. Ignore as entradas de reposição.";
str_err[ERR_ARP_IP_SAME_AS_LANIP]               =   "É proibido amarrar este endereço IP com outro endereço IP."
str_err[ERR_SYS_LOG_SYS_STATUS]					=	"O estado do sistema Syslog é inválido.";
str_err[ERR_SYS_LOG_SRV_ID]						=	"ID do servidor de Syslog é inválido.";
str_err[ERR_SYS_LOG_SRV_STATUS]					=	"O status do servidor Syslog é inválido.";
str_err[ERR_SYS_LOG_SRV_ADDRESS]				=	"Endereço do servidor de Syslog é inválido.";
str_err[ERR_SYS_LOG_SRV_ADDR_EXIST]				=	"Endereço do servidor Syslog existe.";
str_err[ERR_SYS_LOG_SRV_PORT]					=	"Porta do servidor Syslog é inválido.";
str_err[ERR_SYS_LOG_SETTING_EMERGENCY]			=	"Configuração de emergência do Syslog é inválido.";
str_err[ERR_SYS_LOG_SETTING_ALERT]				=	"Definição de alerta é inválido.";
str_err[ERR_SYS_LOG_SETTING_CRITICAL]			=	"Configuração crítica é inválida.";
str_err[ERR_SYS_LOG_SETTING_ERROR]				=	"Configuração do Syslog é inválida.";
str_err[ERR_SYS_LOG_SETTING_WARNING]			=	"Configuração de alerta é inválida.";
str_err[ERR_SYS_LOG_SETTING_NOTICE]				=	"Configuração de aviso é inválida.";
str_err[ERR_SYS_LOG_SETTING_INFORMATIONAL]		=	"Configuração Informacional é inválida.";
str_err[ERR_SYS_LOG_SETTING_DEBUG]				=	"Configuração de Depuração do Syslog é inválido.";
str_err[ERR_SYS_LOG_SETTING_EMPTY]				=	"Configurações estão vazios.";
str_err[ERR_FIREWALL_SYSLOG_SERVER_INVALID_ID]	=	"Firewall do servidor syslog é inválido.";
str_err[ERR_FIREWALL_SYSLOG_SERVER_NOT_DEFINED]	=	"Firewall do servidor syslog não está definido.";
str_err[ERR_FIREWALL_SCREEN_UNKNOWN_DEFENCE]	=	"Tela de defesa do Firewall é desconhecida.";
str_err[ERR_FIREWALL_SCREEN_SCAN_THRESHOLD]		=	"Limite de tela do Firewall é inválida.";
str_err[ERR_FIREWALL_SCREEN_DOS_THRESHOLD]		=	"Limite de tela do Firewall de DoS é inválido.";

str_err[ERR_TDDP_UPLOAD_FILE_TOO_LONG]			=	"O arquivo enviado é muito grande!";
str_err[ERR_TDDP_UPLOAD_FILE_FORMAT_ERR]		=	"Formato de arquivo inválido!";
str_err[ERR_TDDP_UPLOAD_FILE_NAME_ERR]          =   "O nome do arquivo enviado é muito longo!";
str_err[ERR_TDDP_UPLOAD_PRODUCT_INFO_ERR]		=	"O arquivo de configuração foi restaurado sem sucesso pois a versão de hardware ou software não correspondem";
str_err[ERR_COMMON_ERROR]						=	"Ocorreu um erro. Por favor, tente novamente.";
str_err[ERR_DST_HOUR]							=	"Hora incorreta de horário de verão. Por favor, escolha a hora correta.";
str_err[ERR_DST_DAY]							=	"Hora incorreta de horário de verão. Por favor, escolha a hora correta.";
str_err[ERR_DST_MONTH]							=	"Hora incorreta de horário de verão. Por favor, escolha a hora correta.";
str_err[ERR_DST_BEGIN_END]						=	"O inicio do horário de verão não deve ser igual ao fim do horário de verão.";
str_err[ERR_TDDP_DOWNLOAD_FILE_TOO_LONG]		=	"O arquivo baixado é muito longo!";
str_err[ERR_VS_RECORD_CONFLICT_REMOTE_WEB_PORT] =   "A porta do servidor virtual é conflitante com a porta de gestão remota da interface WEB.";
str_err[ERR_VS_RECORD_CONFLICT_FTP_PORT]		=	"A porta do servidor virtual está conflitando com a porta do servidor FTP."
str_err[ERR_WLAN_CONFIG_BASE]					=	"Configuração wireless inválida!";
str_err[ERR_WLAN_CONFIG_SECURITY]				=	"Configuração de segurança wireless inválida";
str_err[ERR_WLAN_CONFIG_KEY]					=	"Chave WEP wireless inválida";
str_err[ERR_WLAN_MAC_FILTER_PAGE_NUM_ERROR]		=	"Página MAC inválida. Por favor, tente novamente!";
str_err[ERR_WLAN_MAC_FILTER_RECORD_ALREADY_EXIST]=	"Entrada de controle de acesso Wireless já existe. Por favor digite outra!";
str_err[ERR_WLAN_MAC_FILTER_RECORD_ALREADY_FULL]=	"Foi atingido o número máximo de entradas de controle de acesso wireless: 64";
// add by lsz 071103
str_err[ERR_IP_NOT_IN_THE_SAME_SUBNET]          =	"O endereço IP não está na mesma sub-rede com o endereço IP da LAN.";
str_err[ERR_WLAN_SSID_LEN]                      =   "O comprimento do SSID está incorreto. Por favor digite outro.";
str_err[ERR_WLAN_REGION]                        =   "A região está incorreta.";
str_err[ERR_WLAN_CHANNEL_WIDTH]                 =   "A largura do canal está incorreta.";
str_err[ERR_WLAN_STATIC_RATE]                   =   "A taxa de IP estático está incorreta.";
str_err[ERR_WLAN_MODE]                          =   "O modo de configuração está incorreto.";
str_err[ERR_WLAN_OPER_MODE]						=	"The operation mode's setting is incorrect.";
str_err[ERR_WLAN_BROADCAST]                     =   "A configuração SSID broadcast está incorreta.";
str_err[ERR_WLAN_MAC_ADDR_INVALID]              =   "O endereço MAC está incorreto. Por favor digite outro.";
str_err[ERR_WLAN_RADIUS_IP_INVALID]				=	"A faixa de IP do servidor é inválido. Por favor digite outro.";
str_err[ERR_WLAN_MODE_UNSUPPORT_CFG]			=	"";
//parental control
str_err[ERR_PARENT_CTRL_FULL]					=	"A lista de Controle de Pais está cheia.";
str_err[ERR_PARENT_CTRL_URLDESC]				=	"Esta lista de nome de website foi utilizada.";
str_err[ERR_PARENT_CTRL_SAME_MAC_WITH_PARENT]	=	"O endereço MAC do computador controlado deve ser diferente do endereço MAC do computador do responsável.";

//rule filter
str_err[ERR_ACC_CTRL_HOST_FULL]					=	"A lista de Estações está cheia.";
str_err[ERR_ACC_CTRL_TARGET_FULL]				=	"A lista de Alvos está cheia.";
str_err[ERR_ACC_CTRL_SCHEDULE_FULL]				=	"A lista de Horários está cheia.";
str_err[ERR_ACC_CTRL_RULE_FULL]					=	"A tabela de política de gerenciamento de controle de acesso está cheia.";
str_err[ERR_ACC_CTRL_SAME_NAME]					=	"Este nome de entrada está em uso.";
str_err[ERR_ACC_CTRL_REFERED]					=	"Este item está em uso e não pode ser apagado.";
str_err[ERR_ACC_CTRL_RULE_CONFLICT]				=	"Esta regra foi definida.";
str_err[ERR_ACC_PARTIAL_DEL]					=	"Algumas entradas não podem ser apagadas porque estão em uso, enquanto todas as outras entradas foram apagadas.";
str_err[ERR_ACC_DEL_NONE]						=	"Todos os itens estão em uso, e não podem ser apagados.";
str_err[ERR_FILTER_MAC]							=	"Endereço MAC inválido.";
str_err[ERR_ACC_CTRL_HOST_IPSTART]				=	"Endereço IP Inicial inválido.";
str_err[ERR_ACC_CTRL_HOST_IPEND]				=	"Endereço IP Final inválido.";
str_err[ERR_ACC_CTRL_TARGET_IPSTART]			=	"Endereço IP Inicial inválido.";
str_err[ERR_ACC_CTRL_TARGET_IPEND]				=	"Endereço IP Final inválido.";
str_err[ERR_ACC_CTRL_HOST_IPSTART_NOT_IN_THE_SAME_SUBNET] = "O endereço IP inicial deve estar na mesma sub-rede com o endereço IP da LAN.";
str_err[ERR_ACC_CTRL_HOST_IPEND_NOT_IN_THE_SAME_SUBNET] = "O endereço IP final deve estar na mesma sub-rede com o endereço IP da LAN.";

//nas
str_err[ERR_NAS_ACCOUNT_DUPLICATE]				=	"Conta de usuário duplicado.";
str_err[ERR_FTP_INVALID_PORT]					=	"Número de porta pode ter conflito com outros programas no roteador. Por favor, escolha outro número.";
str_err[ERR_NAS_TOO_MANY_USER]					=	"Excesso de usuários.";
str_err[ERR_FTP_SHAREFOLDER_DUPLICATE]			=	"Pasta de compartilhamento duplicada.";
str_err[ERR_FTP_TOO_MANY_SHAREFOLDER]			=	"Excesso de pastas compartilhadas.";
str_err[ERR_NAS_ACCOUNT_CONFLICT_GUESTNETWORK]	=	"Conta de Usuário conflita com a conta da Rede de Visitante.";
str_err[ERR_INVALID_FLODER_PATH]				= 	"Caminho de pasta compartilhada invalido.";

// VPN stuff
str_err[ERR_VPN_SAME_NAME]						=	"Nome de Política conflita com uma existente.";
str_err[ERR_VPN_IKE_TABLE_FULL]					=	"Lista de política de segurança IKE está cheia.";
str_err[ERR_VPN_IKE_CONFLICT]					=	"Política de segurança IKE conflita com uma existente.";
str_err[ERR_VPN_IKE_REFERED]					=	"Política de segurança IKE está sendo utilizada por uma política de segurança IPsec, não pode ser excluída.";
str_err[ERR_VPN_INDEX_NO_EXISTED]				=	"Índice de política solicitado não existe.";
str_err[ERR_VPN_DEL_PARTIAL]					=	"Erro ao deletar a política, a lista não pode ser apagada.";
str_err[ERR_VPN_DEL_NONE]						=	"Erro ao deletar a política, não foi especificada nenhuma política.";
str_err[ERR_VPN_LOCAL_ID]						=	"ID Local incorreto.";
str_err[ERR_VPN_PEER_ID]						=	"ID do peer incorreto.";
str_err[ERR_VPN_LOCAL_NET_IP]					=	"Sub-rede local incorreta.";
str_err[ERR_VPN_LOCAL_NET_MSK]					=	"Extensão da máscara de sub-rede local incorreta.";
str_err[ERR_VPN_PEER_NET_IP]					=	"Sub-rede do peer incorreta.";
str_err[ERR_VPN_PEER_NET_MSK]					=	"Extensão da máscara de sub-rede peer incorreta.";
str_err[ERR_VPN_PEER_GW]						=	"Gateway do peer incorreto.";
str_err[ERR_VPN_IPSEC_TABLE_FULL]				=	"Política IPsec cheia.";
str_err[ERR_VPN_IPSEC_CONFLICT]					=	"Política IPsec policy conflita com uma existente.";
str_err[ERR_VPN_OTHER_ERROR]					=	"Erro desconhecido.";
str_err[ERR_VPN_SPI]							=	"Valor de SPI duplicado ou conflita com outra política existente.";
str_err[ERR_VPN_SAD_INVALID]					=	"Não foi possível ler a informação da aliança de segurança.";
str_err[ERR_VPN_AUTH_KEY_INVALID]				=	"Erro de verificação de chave.";
str_err[ERR_VPN_ENCRYPT_KEY_INVALID]			=	"Erro de criptografia de chave.";
str_err[ERR_VPN_STATIC_ROUTE_CONFLICT]			=	"Política IPsec conflita com rota estática.";

// Mobile
str_err[ERR_USB_MODEM_LIST_FULL]				=	"Lista de modems 3G USB está cheia.";
str_err[ERR_USB_MODEM_LIST_UPLOAD_TOO_MANY_ENTRIES]	=	"O arquivo carregado contém excesso de entradas de modems 3G USB.";
str_err[ERR_USB_MODEM_LIST_UPLOAD_PARSE_FAILED]	=	"Falha ao analisar o arquivo de configuração do modem 3G USB, por favor, verifique-o.";
str_err[ERR_USB_MODEM_ENTRY_ALREADY_EXIST]		= 	"Entrada de modem 3G Usb modem já existe, por favor, verifique o o arquivo carregado  ou exclua todas as entradas de modem USB.";

//IPV6
str_err[ERR_IPV6_STATICIP_ERROR_GATEWAY]		= 	"Erro do gateway padrão IPv6."

