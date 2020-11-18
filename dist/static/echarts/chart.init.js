var colorBarLine = ['#e81c07', '#6da5f9'];
var colorBar = ['rgba(1,253,253,1)', 'rgba(247,217,38, 1)', '#1349b7', 'rgba(80,244,180, 1)'];
var colorTwo = ['rgba(1,253,253,0.1)', 'rgba(247,217,38, 0.1)', '#00ffde', 'rgba(80,244,180, 0.1)'];
var colorLine = ['#f07008', '#f0dd08', '#f0a608', '#d885f5'];
var colorPie = ["#0088fe", "#00a7fe", "#11c05f", "#fc602d", "#f58a22", "#f5c622", "#d066f3"];
var colorBar_Y = ['rgba(57,212,71, 1)', 'rgba(247,217,38, 1)'];
var colorBar_Y_1 = ['rgba(57,212,71, 0)', 'rgba(247,217,38, 0)'];

var chartInitService = {
	nameMapC: { "阿富汗": "Afghanistan", "安哥拉": "Angola", "阿尔巴尼亚": "Albania", "阿尔及利亚": "Algeria", "阿根廷": "Argentina", "亚美尼亚": "Armenia", "澳大利亚": "Australia", "奥地利": "Austria", "阿塞拜疆": "Azerbaijan", "巴哈马": " Bahamas ", "孟加拉国": "Bangladesh", "比利时": " Belgium ", "贝宁": "Benin", "布基纳法索": "Burkina Faso", "布隆迪": " Burundi", "保加利亚": "Bulgaria", "波斯尼亚和黑塞哥维那": "Bosnia and Herz", "白俄罗斯": "Belarus", "伯利兹": "Belize", "百慕大群岛": "Bermuda", "玻利维亚": "Bolivia", "巴西": "Brazil", "文莱": "Brunei ", "不丹": "Bhutan", "博茨瓦纳": "Botswana", "柬埔寨": "Cambodia", "喀麦隆": "Cameroon", "加拿大": "Canada", "中非共和国": "Central African Rep.", "乍得": "Chad", "智利": "Chile", "中国": "China", "哥伦比亚": "Colombia", "刚果（金）": "Congo", "哥斯达黎加": "Costa Rica", "科特迪瓦": "Côte d'Ivoire", "克罗地亚": "Croatia ", "古巴": "Cuba", "塞浦路斯": "Cyprus", "捷克共和国": "CzechRep", "韩国": "Dem.Rep.Korea", "刚果（布）": "Dem. Rep. Congo", "丹麦": "Denmark", "吉布提": "Djibouti", "多米尼加": "Dominican Rep.", "厄瓜多尔": "Ecuador", "埃及": "Egypt", "萨尔瓦多": "ElSalvador", "赤道几内亚": "Eq.Guinea", "厄立特里亚": "Eritrea", "爱沙尼亚": "Estonia", "埃塞俄比亚": "Ethiopia", "福克兰群岛": "FalklandIs", "斐济": "Fiji", "芬兰": "Finland", "法国": "France", "法属圭亚那": "FrenchGuiana", "法属南部领地": "Fr.S.AntarcticLands", "加蓬": "Gabon", "冈比亚": "Gambia", "德国": "Germany", "佐治亚州": "Georgia ", "加纳": "Ghana", "希腊": "Greece", "格陵兰": "Greenland", "危地马拉": "Guatemala", "几内亚": "Guinea", "几内亚比绍": "Guinea-Bissau", "圭亚那": "Guyana", "海地": "Haiti", "赫德岛和麦克唐纳群岛": "HeardI.andMcDonaldIs", "洪都拉斯": "Honduras", "匈牙利": "Hungary", "冰岛": "Iceland", "印度": "India", "印度尼西亚": "Indonesia", "伊朗": "Iran", "伊拉克": "Iraq", "爱尔兰": "Ireland", "以色列": "Israel", "意大利": "Italy", "象牙海岸": "IvoryCoast", "牙买加": "Jamaica", "日本": "Japan", "乔丹": "Jordan", "克什米尔": "Kashmir", "哈萨克斯坦": "Kazakhstan", "肯尼亚": "Kenya", "科索沃": "Kosovo", "科威特": "Kuwait", "吉尔吉斯斯坦": "Kyrgyzstan", "老挝": "Lao PDR", "拉脱维亚": "Latvia", "黎巴嫩": "Lebanon", "莱索托": "Lesotho", "利比里亚": "Liberia", "利比亚": "Libya", "立陶宛": "Lithuania", "卢森堡": "Luxembourg", "马达加斯加": "Madagascar", "马其顿": "Macedonia", "马拉维": "Malawi", "马来西亚": "Malaysia", "马里": "Mali", "毛里塔尼亚": "Mauritania", "墨西哥": "Mexico", "摩尔多瓦": "Moldova", "蒙古": "Mongolia", "黑山": "Montenegro", "摩洛哥": "Morocco", "莫桑比克": "Mozambique", "缅甸": "Myanmar", "纳米比亚": "Namibia", "荷兰": "Netherlands", "新喀里多尼亚": "New Caledonia", "新西兰": "New Zealand", "尼泊尔": "Nepal", "尼加拉瓜": "Nicaragua", "尼日尔": "Niger", "尼日利亚": "Nigeria", "朝鲜": "Korea", "北塞浦路斯": "NorthernCyprus", "挪威": "Norway", "阿曼": "Oman", "巴基斯坦": "Pakistan", "巴拿马": "Panama", "巴布亚新几内亚": "Papua New Guinea", "巴拉圭": "Paraguay", "秘鲁": "Peru", "刚果": "Republi cofthe Congo", "菲律宾": "Philippines", "波兰": "Poland", "葡萄牙": "Portugal", "波多黎各": "Puerto Rico", "卡塔尔": "Qatar", "塞尔维亚共和国": "RepublicofSerbia", "罗马尼亚": "Romania", "俄罗斯": "Russia", "卢旺达": "Rwanda", "萨摩亚": "Samoa", "沙特阿拉伯": "Saudi Arabia", "塞内加尔": "Senegal", "塞尔维亚": "Serbia", "塞拉利昂": "Sierra Leone", "斯洛伐克": "Slovakia", "斯洛文尼亚": "Slovenia", "所罗门群岛": "SolomonIs", "索马里兰": "Somaliland", "索马里": "Somalia", "南非": "South Africa", "南乔治亚和南桑德威奇群岛": "S.Geo.andS.Sandw.Is", "南苏丹": "S.Sudan", "西班牙": "Spain", "斯里兰卡": "Sri Lanka", "苏丹": "Sudan", "苏里南": "Suriname", "斯威士兰": "Swaziland", "瑞典": "Sweden", "瑞士": "Switzerland", "叙利亚": "Syria", "塔吉克斯坦": "Tajikistan", "坦桑尼亚": "Tanzania", "泰国": "Thailand", "东帝汶": "Timor-Leste", "多哥": "Togo", "特立尼达和多巴哥": "TrinidadandTobago", "突尼斯": "Tunisia", "土耳其": "Turkey", "土库曼斯坦": "Turkmenistan", "乌干达": "Uganda", "乌克兰": "Ukraine", "沙特阿拉伯": "United Arab Emirates", "大不列颠联合王国": "United Kingdom", "坦桑尼亚联合共和国": "UnitedRepublicofTanzania", "美国": "United States of America", "美利坚合众国": "UnitedStatesofAmerica", "乌拉圭": "Uruguay", "乌兹别克斯坦": "Uzbekistan", "瓦努阿图": "Vanuatu", "委内瑞拉": "Venezuela", "越南": "Vietnam", "西岸": "WestBank", "西撒哈拉": "W.Sahara", "也门共和国": "Yemen", "赞比亚共和国": "Zambia", "津巴布韦": "Zimbabwe" },
	nameMapE: {
		Afghanistan: "阿富汗",
		Angola: "安哥拉",
		Albania: "阿尔巴尼亚",
		"United Arab Emirates": "阿联酋",
		Argentina: "阿根廷",
		Armenia: "亚美尼亚",
		"French Southern and Antarctic Lands": "法属南半球和南极领地",
		Australia: "澳大利亚",
		Austria: "奥地利",
		Azerbaijan: "阿塞拜疆",
		Burundi: "布隆迪",
		Belgium: "比利时",
		Benin: "贝宁",
		"Burkina Faso": "布基纳法索",
		Bangladesh: "孟加拉国",
		Bulgaria: "保加利亚",
		"The Bahamas": "巴哈马",
		"Bosnia and Herzegovina": "波斯尼亚和黑塞哥维那",
		Belarus: "白俄罗斯",
		Belize: "伯利兹",
		Bermuda: "百慕大",
		Bolivia: "玻利维亚",
		Brazil: "巴西",
		Brunei: "文莱",
		Bhutan: "不丹",
		Botswana: "博茨瓦纳",
		"Central African Republic": "中非共和国",
		Canada: "加拿大",
		Switzerland: "瑞士",
		Chile: "智利",
		China: "中国",
		"Ivory Coast": "象牙海岸",
		Cameroon: "喀麦隆",
		"Democratic Republic of the Congo": "刚果民主共和国",
		"Republic of the Congo": "刚果共和国",
		Colombia: "哥伦比亚",
		"Costa Rica": "哥斯达黎加",
		Cuba: "古巴",
		"Northern Cyprus": "北塞浦路斯",
		Cyprus: "塞浦路斯",
		"Czech Republic": "捷克共和国",
		Germany: "德国",
		Djibouti: "吉布提",
		Denmark: "丹麦",
		"Dominican Republic": "多明尼加共和国",
		Algeria: "阿尔及利亚",
		Ecuador: "厄瓜多尔",
		Egypt: "埃及",
		Eritrea: "厄立特里亚",
		Spain: "西班牙",
		Estonia: "爱沙尼亚",
		Ethiopia: "埃塞俄比亚",
		Finland: "芬兰",
		Fiji: "斐",
		"Falkland Islands": "福克兰群岛",
		France: "法国",
		Gabon: "加蓬",
		"United Kingdom": "英国",
		Georgia: "格鲁吉亚",
		Ghana: "加纳",
		Guinea: "几内亚",
		Gambia: "冈比亚",
		"Guinea Bissau": "几内亚比绍",
		"Equatorial Guinea": "赤道几内亚",
		Greece: "希腊",
		Greenland: "格陵兰",
		Guatemala: "危地马拉",
		"French Guiana": "法属圭亚那",
		Guyana: "圭亚那",
		Honduras: "洪都拉斯",
		Croatia: "克罗地亚",
		Haiti: "海地",
		Hungary: "匈牙利",
		Indonesia: "印尼",
		India: "印度",
		Ireland: "爱尔兰",
		Iran: "伊朗",
		Iraq: "伊拉克",
		Iceland: "冰岛",
		Israel: "以色列",
		Italy: "意大利",
		Jamaica: "牙买加",
		Jordan: "约旦",
		Japan: "日本",
		Kazakhstan: "哈萨克斯坦",
		Kenya: "肯尼亚",
		Kyrgyzstan: "吉尔吉斯斯坦",
		Cambodia: "柬埔寨",
		"South Korea": "韩国",
		Kosovo: "科索沃",
		Kuwait: "科威特",
		Laos: "老挝",
		Lebanon: "黎巴嫩",
		Liberia: "利比里亚",
		Libya: "利比亚",
		"Sri Lanka": "斯里兰卡",
		Lesotho: "莱索托",
		Lithuania: "立陶宛",
		Luxembourg: "卢森堡",
		Latvia: "拉脱维亚",
		Morocco: "摩洛哥",
		Moldova: "摩尔多瓦",
		Madagascar: "马达加斯加",
		Mexico: "墨西哥",
		Macedonia: "马其顿",
		Mali: "马里",
		Myanmar: "缅甸",
		Montenegro: "黑山",
		Mongolia: "蒙古",
		Mozambique: "莫桑比克",
		Mauritania: "毛里塔尼亚",
		Malawi: "马拉维",
		Malaysia: "马来西亚",
		Namibia: "纳米比亚",
		"New Caledonia": "新喀里多尼亚",
		Niger: "尼日尔",
		Nigeria: "尼日利亚",
		Nicaragua: "尼加拉瓜",
		Netherlands: "荷兰",
		Norway: "挪威",
		Nepal: "尼泊尔",
		"New Zealand": "新西兰",
		Oman: "阿曼",
		Pakistan: "巴基斯坦",
		Panama: "巴拿马",
		Peru: "秘鲁",
		Philippines: "菲律宾",
		"Papua New Guinea": "巴布亚新几内亚",
		Poland: "波兰",
		"Puerto Rico": "波多黎各",
		"North Korea": "北朝鲜",
		Portugal: "葡萄牙",
		Paraguay: "巴拉圭",
		Qatar: "卡塔尔",
		Romania: "罗马尼亚",
		Russia: "俄罗斯",
		Rwanda: "卢旺达",
		"Western Sahara": "西撒哈拉",
		"Saudi Arabia": "沙特阿拉伯",
		Sudan: "苏丹",
		"South Sudan": "南苏丹",
		Senegal: "塞内加尔",
		"Solomon Islands": "所罗门群岛",
		"Sierra Leone": "塞拉利昂",
		"El Salvador": "萨尔瓦多",
		Somaliland: "索马里兰",
		Somalia: "索马里",
		"Republic of Serbia": "塞尔维亚共和国",
		Suriname: "苏里南",
		Slovakia: "斯洛伐克",
		Slovenia: "斯洛文尼亚",
		Sweden: "瑞典",
		Swaziland: "斯威士兰",
		Syria: "叙利亚",
		Chad: "乍得",
		Togo: "多哥",
		Thailand: "泰国",
		Tajikistan: "塔吉克斯坦",
		Turkmenistan: "土库曼斯坦",
		"East Timor": "东帝汶",
		"Trinidad and Tobago": "特里尼达和多巴哥",
		Tunisia: "突尼斯",
		Turkey: "土耳其",
		"United Republic of Tanzania": "坦桑尼亚联合共和国",
		Uganda: "乌干达",
		Ukraine: "乌克兰",
		Uruguay: "乌拉圭",
		"United States of America": "美国",
		Uzbekistan: "乌兹别克斯坦",
		Venezuela: "委内瑞拉",
		Vietnam: "越南",
		Vanuatu: "瓦努阿图",
		"West Bank": "西岸",
		Yemen: "也门",
		"South Africa": "南非",
		Zambia: "赞比亚",
		Zimbabwe: "津巴布韦"
	},
	multipleBar(data) {
		var option = {
			// color: colors,
			color: [{
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'RGBA(1,253,253,1)'
				}, {
					offset: 1,
					color: 'RGBA(1,253,253,0)'
				}],
			}, {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'RGBA(247,217,38,1)'
				}, {
					offset: 1,
					color: 'RGB(247,217,38,0)'
				}],
			}, {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'RGB(57,212,71, 1)'
				}, {
					offset: 1,
					color: 'RGB(57,212,71, 0)'
				}],
			},],
			title: {
				text: ''
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			toolbox: {
				right: "20"
			},
			legend: {
				orient: 'horizontal',
				// itemGap: 70,
				textStyle: {
					color: '#fff',
					fontSize: 16
				},
				itemGap: 35,
				itemWidth: 16,
				itemHeight: 16,
				data: data.legend,
				bottom: '0%',
				left: '22%'
			},
			grid: {
				top: '13%',
				left: '3%',
				right: '0%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				// name: data.xname,
				data: data.xdata,
				axisLabel: {
					color: '#fff',
					interval: 0,
					rotate: 0,
					fontSize: 16
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						type: 'dashed',
						opacity: 1
					}
				},
			},
			yAxis: {
				type: 'value',
				name: '单位：条',
				// max: 100,
				nameTextStyle: {
					color: '#fff',
					fontSize: 16
				},
				// 刻度
				axisTick: {
					show: false,
					// inside: true,
					lineStyle: {
						color: '#fff',
						opacity: 1
					}
				},
				// 刻度标签
				axisLabel: {
					show: true,
					color: '#fff',
					fontSize: 16
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'RGBA(153,167,222,0.7)',
						type: 'dashed',
					}
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
			},
			series: data.seriesdata
		};
		return option;
	},
	multipleBarStack(data) {
		var option = {
			// color: colors,
			color: ['#01fdff', '#eedc15', '#3cd748', '#0098fb', '#f39c11', '#fe65e6'],
			title: {
				text: ''
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			toolbox: {
				right: "20"
			},
			legend: {
				orient: 'horizontal',
				// itemGap: 70,
				textStyle: {
					color: '#fff',
					fontSize: 16
				},
				itemGap: 10,
				itemWidth: 16,
				itemHeight: 16,
				data: data.legend,
				bottom: '3%',
				left: '5%'
			},
			grid: {
				top: '10%',
				left: '3%',
				right: '0%',
				bottom: '18%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				// name: data.xname,
				data: data.xdata,
				axisLabel: {
					color: '#fff',
					interval: 0,
					rotate: 0,
					fontSize: 16
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						type: 'dashed',
						opacity: 1
					}
				},
			},
			yAxis: {
				type: 'value',
				name: '单位：条',
				// max: 100,
				nameTextStyle: {
					color: '#fff',
					fontSize: 16
				},
				// 刻度
				axisTick: {
					show: false,
					// inside: true,
					lineStyle: {
						color: '#fff',
						opacity: 1
					}
				},
				// 刻度标签
				axisLabel: {
					show: true,
					color: '#fff',
					fontSize: 16
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'RGBA(153,167,222,0.7)',
						type: 'dashed',
					}
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
			},
			series: data.seriesdata
		};
		return option;
	},
	multipleBarLine(data) {
		var option = {
			// color: colors,
			color: [{
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'RGBA(63,204,69,1)'
				}, {
					offset: 1,
					color: 'RGBA(63,204,69,0)'
				}],
			}, {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'RGBA(228,207,25,1)'
				}, {
					offset: 1,
					color: 'RGBA(228,207,25,0)'
				}],
			}, '#fd9517'],
			title: {
				text: ''
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			toolbox: {
				right: "20"
			},
			legend: {
				orient: 'horizontal',
				// itemGap: 70,
				textStyle: {
					color: '#fff',
					fontSize: 16
				},
				itemGap: 10,
				itemWidth: 16,
				itemHeight: 16,
				data: data.legend,
				bottom: '3%',
				left: '5%'
			},
			grid: {
				top: '10%',
				left: '3%',
				right: '0%',
				bottom: '18%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				// name: data.xname,
				data: data.xdata,
				axisLabel: {
					color: '#fff',
					interval: 0,
					rotate: 0,
					fontSize: 16
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						type: 'dashed',
						opacity: 1
					}
				},
			},
			yAxis: [{
				type: 'value',
				name: '单位：条',
				// max: 100,
				nameTextStyle: {
					color: '#fff',
					fontSize: 16
				},
				// 刻度
				axisTick: {
					show: false,
					// inside: true,
					lineStyle: {
						color: '#fff',
						opacity: 1
					}
				},
				// 刻度标签
				axisLabel: {
					show: true,
					color: '#fff',
					fontSize: 16
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'RGBA(153,167,222,0.7)',
						type: 'dashed',
					}
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
			}, {
				type: 'value',
				name: '单位：%',
				// max: 100,
				nameTextStyle: {
					color: '#fff',
					fontSize: 16
				},
				// 刻度
				axisTick: {
					show: false,
					// inside: true,
					lineStyle: {
						color: '#fff',
						opacity: 1
					}
				},
				// 刻度标签
				axisLabel: {
					show: true,
					color: '#fff',
					fontSize: 16
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'RGBA(153,167,222,0.7)',
						type: 'dashed',
					}
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#fff',
						width: 1,
						opacity: 1
					}
				},
			},],
			series: data.seriesdata
		};
		return option;
	},
	/* 饼图/玫瑰图创建方法
	 * legend: Array<string> 图例
	 * data: Array<any> 数据
	 */

	basicPie(legend, data, {
		title = '',
		name = '',
		radius = ["60%", "85%"] || '45%',
		center = ['50%', '53%'],
		roseType = '',
		// formatter = '{b}: {d}%',
		startAngle = '90',
		legendShow = false,
		piePosition = 'inside',
		labelShow = false,
	} = {}) {
		// 处理返回的option
		var option = {
			title: {
				left: 'center',
				text: title,
			},
			tooltip: {
				confine: true,
				trigger: 'item',
			},
			legend: {
				show: legendShow,
				data: legend,
			},
			series: [{
				name: name,
				type: 'pie',
				radius: radius,
				center: center,
				roseType: roseType,
				data: data,
				startAngle: startAngle,
				label: {
					normal: {
						position: piePosition,
						show: labelShow,
						formatter: (params) => {
							if (piePosition === 'outside') {
								return params.name.substring(-1, 5);
							} else if (piePosition === 'inside') {
								return params.percent.toFixed(0) + '%'
							}

						},
						textStyle: {
							fontSize: '12',
							fontWeight: 'bold',
						},

					},
					emphasis: {
						// show: true,
					},
				},
			},],
		};
		return option;
	},
	/* 单柱/折线创建方法
	 * data: Array<any> 数据
	 * xData: Array<any> x轴数据
	 */
	basicBarLine(data, xData, {
		title = '',
		yName = '',
		xName = '',
		type = 'bar',
		grid = {
			left: '4%',
			right: '4%',
			bottom: '6%',
			top: '15%',
		},
		rotate = '0',
		labelShow = false,
		xAxisShow = true,
		xoy = 'x',
		interval = '0',
		intervalShow = true,
		labelPosition = '',
		dataZoom = [],
		show = false,
		axisLineShowY = true, //坐标轴
		axisLineShowX = true,
		splitLineShowX = true, //网格线
		axisLabelShowX = true, //坐标轴刻度值
		startNum = '80',
		barWidth = 21
	} = {}) {
		// 处理返回的option
		const option = {
			title: {
				left: 'center',
				text: title,
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: "shadow"
				}
			},
			grid: grid,
			xAxis: [],
			yAxis: [],
			series: [{
				name: '',
				type: type,
				data: data,
				barWidth: barWidth,
				label: {
					show: labelShow,
					position: labelPosition,
					textStyle: {
						color: '#fff'
					}
				},
				itemStyle: {

				},
			},],
		};
		if (show) {
			option['dataZoom'] = [{
				show: show,
				height: 20,
				xAxisIndex: [
					0
				],
				showDetail: false,
				bottom: '0%',
				start: startNum,
				end: 60,
				// handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
				// handleSize: '110%',
				// handleStyle: {
				//   color: '#1983EC',
				// },
				textStyle: {
					color: '#fff'
				},
				// borderColor: '#1983EC',
				// fillerColor: '#41DCF8',
			}, {
				type: 'inside',
				show: true,
				height: 12,
				start: startNum,
				end: 60
			}];
		}
		if (type === 'bar') {
			option.series[0].itemStyle['color'] = {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: colorBar[2]
				},
				{
					offset: 1,
					color: colorTwo[2]
				}
				],
			};
		} else {
			option.series[0].itemStyle['color'] = colorLine[0];
		}
		if (xoy === 'x') {
			if (intervalShow) {
				option.xAxis = [{
					name: xName,
					type: 'category',
					data: xData,
					axisLabel: {
						interval: 0,
						rotate: rotate,
					},
				},];
			} else {
				option.xAxis = [{
					name: xName,
					type: 'category',
					data: xData,
					axisLabel: {
						interval: interval,
						rotate: rotate,
					},
				},];
			}

			option.yAxis = [{
				name: yName,
				type: 'value',
			},];
			option.series[0].itemStyle['barBorderRadius'] = [0, 0, 0, 0];
		} else {
			if (type === 'bar') {
				option.series[0].itemStyle['color'] = {
					type: 'linear',
					x: 1,
					y: 0,
					x2: 0,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: colorBar[2]
					},
					{
						offset: 1,
						color: colorTwo[2]
					}
					],
				};
			}
			option.xAxis = [{
				show: xAxisShow,
				name: xName,
				nameLocation: 'end',
				nameTextStyle: {
					verticalAlign: 'bottom'
				},
				type: 'value',
				splitLine: {
					show: splitLineShowX,
				},
				axisLabel: {
					show: axisLabelShowX
				},
				axisLine: {
					show: axisLineShowX,
					lineStyle: {
						type: 'solid',
					}
				},
			},];
			option.yAxis = [{
				name: yName,
				type: 'category',
				data: xData,
				axisLabel: {
					interval: interval,
					rotate: rotate,
				},
				axisLine: {
					show: axisLineShowY
				},
			},];
			option.series[0].itemStyle['barBorderRadius'] = [0, 0, 0, 0];
		}
		return option;
	},
	/* 多柱/折线创建方法 
	 * legend: Array<string> 图例
	 * data: Array<any> 数据
	 * xData: Array<any> x轴数据
	 */
	multipleBarLine_1(legend, data, xData, {
		title = '',
		yName = [''],
		xName = '',
		type = [],
		yIndex = [],
		grid = {
			left: '0%',
			right: '4%',
			bottom: '0%',
			top: '12%',
		},
		rotate = '',
		labelShow = [],
		xoy = 'x',
		barWidth = '14',
		stack = false,
		dataZoom = [],
		dataZoomTop = 'auto',
		show = false,
		startNum = '80',
		interval = '',
	} = {}) {
		// 处理返回的option
		var valueData = [];
		var sreiesData = [];
		for (var iterator of yName) {
			valueData.push({
				name: iterator,
				type: 'value',
				axisLine: {
					show: false,
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eaeaea',
						type: 'solid',
					}
				},
			});
		}
		let indexBar = 0;
		let indexLine = 0;
		// tslint:disable-next-line:forin
		for (var key in legend) {
			// tslint:disable-next-line:max-line-length
			type[key] === undefined ? type[key] = 'bar' : type[key] = type[key];
			yIndex[key] === undefined ? yIndex[key] = '0' : yIndex[key] = yIndex[key];
			// tslint:disable-next-line:max-line-length
			labelShow[key] === undefined ? labelShow[key] = false : labelShow[key] = labelShow[key];
			var itemStyles = {};
			// if (type[key] === 'bar' && !stack) {
			// 	itemStyles['color'] = {
			// 		type: 'linear',
			// 		x: 0,
			// 		y: 0,
			// 		x2: 0,
			// 		y2: 1,
			// 		colorStops: [{
			// 			offset: 0,
			// 			color: colorBar[indexBar]
			// 		},
			// 		{
			// 			offset: 1,
			// 			color: colorTwo[indexBar]
			// 		}
			// 		],
			// 	};
			// 	if (xoy === 'y') {
			// 		itemStyles['color'] = {
			// 			type: 'linear',
			// 			x: 1,
			// 			y: 0,
			// 			x2: 0,
			// 			y2: 0,
			// 			colorStops: [{
			// 				offset: 0,
			// 				color: colorBar_Y[indexBar]
			// 			},
			// 			{
			// 				offset: 1,
			// 				color: colorBar_Y_1[indexBar]
			// 			}
			// 			],
			// 		};
			// 	}
			// 	indexBar++;
			// } else if (type[key] === 'line') {
			// 	itemStyles['color'] = colorLine[indexLine];
			// 	indexLine++;
			// }
			sreiesData.push({
				name: legend[key],
				stack: stack,
				type: type[key],
				data: data[key],
				label: {
					show: labelShow[key],
				},
				itemStyle: itemStyles
			});
			// tslint:disable-next-line:max-line-length
			// xoy === 'x' ? sreiesData[key].yAxisIndex = yIndex[key] : sreiesData[key].xAxisIndex = yIndex[key];
			// if (type[key] === 'bar' && !stack && xoy === 'x') {
			// 	itemStyles['barBorderRadius'] = [15, 15, 0, 0];
			// } else if (type[key] === 'bar' && !stack && xoy === 'y') {
			// 	itemStyles['barBorderRadius'] = [0, 15, 15, 0];
			// }
		}
		var option = {
			color: colorBarLine,
			title: {
				left: 'center',
				text: title,
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: "shadow"
				}
			},
			grid: grid,
			legend: {
				data: legend,
				top: '2%',
				left: 'center',
				orient: 'horizontal',

			},
			xAxis: [],
			yAxis: [],
			series: sreiesData,
		};
		if (show) {
			option['dataZoom'] = [{
				show: show,
				top: dataZoomTop,
				height: 12,
				xAxisIndex: [
					0
				],
				showDetail: false,
				bottom: '5%',
				start: startNum,
				end: 60,
				// handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
				// handleSize: '110%',
				// handleStyle: {
				//   color: '#1983EC',
				// },
				textStyle: {
					color: '#fff'
				},
				// borderColor: '#1983EC',
				// fillerColor: '#41DCF8',
			}, {
				type: 'inside',
				show: true,
				height: 12,
				start: startNum,
				end: 60
			}];
		}
		if (xoy === 'x') {
			option.xAxis = [{
				name: xName,
				type: 'category',
				data: xData,
				axisLabel: {
					interval: interval,
					rotate: rotate,
				},
				axisLine: {
					show: true,
				},
			},];
			option.yAxis = valueData;
		} else {
			option.xAxis = valueData;
			option.yAxis = [{
				name: yName,
				nameLocation: 'end',
				type: 'category',
				data: xData,
				axisLabel: {
					interval: 0,
					rotate: rotate,
				},
				axisLine: {
					show: true,
				},
			},];
		}
		return option;
	},
	middleMap(mapData) {
		var mapOption = {
			geo: {
				map: "world",
				zoom: 1.27,
				zlevel: 1,
				roam: 'scale',
				silent: true,
				label: {
					show: false
				},
				itemStyle: {
					opacity: 1,
					borderWidth: 0,
					borderColor: "transparent",
					areaColor: "transparent",
					// shadowColor: "RGBA(0,254,255,1)",
					//   shadowBlur: 30,
					color: "transparent",
					emphasis: { label: { show: false } }
				},
				emphasis: {
					itemStyle: {
						opacity: 0,
						borderWidth: 0,
						borderColor: "transparent",
						areaColor: "#000",
						color: "transparent"
					},
					label: {
						show: false
					}
				},
				// regions: [{
				// 	name: "China",
				// 	selected: true,
				// 	itemStyle: {
				// 		normal: {
				// 			borderWidth: 0,
				// 			borderColor: "transparent",
				// 			areaColor: "#e81c07"
				// 		},
				// 		emphasis: {
				// 			borderWidth: 0,
				// 			borderColor: "transparent",
				// 			areaColor: "#e81c07"
				// 		}
				// 	}
				// }]
			},
			tooltip: {
				trigger: "item",
			},
			visualMap: {
				min: 1,
				max: 4,
				left: 6,
				bottom: 10,
				showLabel: !0,
				text: ["", ""],
				pieces: [
				],
				show: false
			},
			// dataRange: {
			// 	show: false,
			// 	min: 0,
			// 	max: 1000000,
			// 	text: ["High", "Low"],
			// 	realtime: false,
			// 	calculable: true,
			// 	pieces: [{
			// 		value: 2,
			// 		color: "#000"
			// 	}],
			// 	// color: ["orangered", "#f5c622", "lightskyblue"]
			// },
			series: [
				{
					top: 30,
					name: "业务分布",
					type: "map",
					zoom: 1.27,
					mapType: "world",
					roam: 'scale',
					mapLocation: {
						y: 60
					},
					itemStyle: {
						opacity: 1,
						borderWidth: 0,
						borderColor: "#0088fe",
						areaColor: "#bbb",
						// shadowColor: "RGBA(0,254,255,1)",
						//   shadowBlur: 30,
						color: "transparent",

					},
					emphasis: {
						label: { show: false },
						itemStyle: {
							opacity: 1,
							borderWidth: 0,
							borderColor: "#0088fe",
							areaColor: "#8cc3fa",
							// shadowColor: "RGBA(0,254,255,1)",
							//   shadowBlur: 30,
							color: "transparent"
						}
					},
					data: mapData
				}
			]
		};

		// this.mapOption = this.ChartInitService.map(
		//   seriesdata,
		//   "RGB(10,47,172,0)",
		//   true
		// );
		return mapOption;
	},
	map(seriesdata, borderColor, tooltipShow, formatter) {
		var middleMapOption = {
			geo: {
				map: "world",
				zoom: 1.2,
				zlevel: 1,
				roam: false,
				itemStyle: {
					opacity: 0.7,
					borderWidth: 1.8,
					borderColor: borderColor,
					areaColor: "RGB(10,47,172)",
					// shadowColor: "RGBA(0,254,255,1)",
					//   shadowBlur: 30,
					color: "transparent"
				},
				silent: true,
				label: {
					show: false
					// normal: {
					//   show: false,
					// },
					// emphasis: {
					//   show: false,
					//   color: '#fff',
					// }
				},
				emphasis: {
					itemStyle: {
						opacity: 0.7,
						borderWidth: 1.8,
						borderColor: "RGB(10,47,172)",
						areaColor: "RGB(10,47,172)",
						color: "transparent"
					},
					label: {
						show: false
					}
				},
				regions: [{
					name: "China",
					selected: true,
					itemStyle: {
						normal: {
							borderWidth: 1.8,
							borderColor: "#f4440d",
							areaColor: "RGB(10,47,172)"
						},
						emphasis: {
							borderWidth: 1.8,
							borderColor: "#f4440d",
							areaColor: "RGB(10,47,172)"
						}
					}
				}]
			},
			tooltip: {
				trigger: 'item',
				show: tooltipShow,
				formatter: formatter
			},

			series: seriesdata,
			// series: {
			// 	type: "map",
			// 	map: "world",
			// 	zlevel: 2,
			// 	data: seriesdata,
			// }
		};
		return middleMapOption
	},
	map_3(seriesdata) {
		var middleMapOption = {
			tooltip: {
				trigger: 'item',
				formatter: '{b}<br/>{c} (热力值)'
			},
			toolbox: {
				show: true,
			},
			visualMap: {
				min: 0,
				max: 10000,
				text: ['高', '低'],
				textStyle: {
					color: "#fff"
				},
				realtime: true,
				left: 'right',
				calculable: false,
				inRange: {
					color: ['#316ffc', '#7abaec', '#ffed49', '#ff9b35', '#c46709', '#bf0a29', '#940b22']
				}
			},
			series: seriesdata
		};
		return middleMapOption;
	}

};

export default chartInitService
