var colorBar = ['rgba(1,253,253,1)', 'rgba(247,217,38, 1)', '#1349b7', 'rgba(80,244,180, 1)'];
var colorTwo = ['rgba(1,253,253,0.1)', 'rgba(247,217,38, 0.1)', '#00ffde', 'rgba(80,244,180, 0.1)'];
var colorLine = ['#f07008', '#f0dd08', '#f0a608', '#d885f5'];
var colorPie = ["#fe65e6", "#f39c11", "#0098fb", "#3cd748", "#eedc15", "#01fdff", "#a800ff"];
var colorBar_Y = ['rgba(57,212,71, 1)', 'rgba(247,217,38, 1)'];
var colorBar_Y_1 = ['rgba(57,212,71, 0)', 'rgba(247,217,38, 0)'];
var chartInitService = {
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
			}, ],
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
			}, ],
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
		radius = ['40%', '65%'] || '45%',
		center = ['50%', '45%'],
		roseType = '',
		formatter = '{b}: {d}%',
		startAngle = '90',
		legendShow = false,
	} = {}) {
		// 处理返回的option
		var option = {
			color: colorPie,
			title: {
				left: 'center',
				text: title,
			},
			tooltip: {
				confine: true,
				trigger: 'item',
				formatter: formatter,
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
						position: 'outside',
						show: true,
						formatter: (params) => {
							return params.name.substring(-1, 5);
						},
						textStyle: {
							fontSize: '12',
							fontWeight: 'bold',
						},

					},
					emphasis: {
						show: true,
					},
				},
			}, ],
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
			}, ],
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
				}, ];
			} else {
				option.xAxis = [{
					name: xName,
					type: 'category',
					data: xData,
					axisLabel: {
						interval: interval,
						rotate: rotate,
					},
				}, ];
			}

			option.yAxis = [{
				name: yName,
				type: 'value',
			}, ];
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
			}, ];
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
			}, ];
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
			left: '3%',
			right: '2%',
			bottom: '14%',
			top: '14%',
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
			});
		}
		let indexBar = 0;
		let indexLine = 0;
		// tslint:disable-next-line:forin
		for (var key in legend) {
			// console.log(key,5555555,legend)
			// tslint:disable-next-line:max-line-length
			type[key] === undefined ? type[key] = 'bar' : type[key] = type[key];
			yIndex[key] === undefined ? yIndex[key] = '0' : yIndex[key] = yIndex[key];
			// tslint:disable-next-line:max-line-length
			labelShow[key] === undefined ? labelShow[key] = false : labelShow[key] = labelShow[key];
			var itemStyles = {};
			if (type[key] === 'bar' && !stack) {
				itemStyles['color'] = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: colorBar[indexBar]
						},
						{
							offset: 1,
							color: colorTwo[indexBar]
						}
					],
				};
				if (xoy === 'y') {
					itemStyles['color'] = {
						type: 'linear',
						x: 1,
						y: 0,
						x2: 0,
						y2: 0,
						colorStops: [{
								offset: 0,
								color: colorBar_Y[indexBar]
							},
							{
								offset: 1,
								color: colorBar_Y_1[indexBar]
							}
						],
					};
				}
				indexBar++;
			} else if (type[key] === 'line') {
				itemStyles['color'] = colorLine[indexLine];
				indexLine++;
			}
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
			xoy === 'x' ? sreiesData[key].yAxisIndex = yIndex[key] : sreiesData[key].xAxisIndex = yIndex[key];
			if (type[key] === 'bar' && !stack && xoy === 'x') {
				itemStyles['barBorderRadius'] = [15, 15, 0, 0];
			} else if (type[key] === 'bar' && !stack && xoy === 'y') {
				itemStyles['barBorderRadius'] = [0, 15, 15, 0];
			}
		}
		var option = {
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
				bottom: '0',
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
			}, ];
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
			}, ];
		}
		return option;
	},
	map(seriesdata, borderColor, tooltipShow, formatter) {
		var middleMapOption = {
			geo: {
				map: "world",
				zoom: 1.2,
				zlevel: 2,
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

			series: seriesdata
			// series: {
			//   type: "map",
			//   map: "world"
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
