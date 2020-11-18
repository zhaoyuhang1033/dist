var chartHandleService = {
  /**
   * 饼图/玫瑰图数据处理方法
   * data: 数据源,
   * pieValue: 饼图原数据
   * pieName: 数值的名称
  */
  basicPieHandel(data, pieValue, pieName) {
    const dataHandle = {
      legend: [],
      data: [],
    };
    for (const iterator of data) {
      dataHandle.legend.push(iterator[pieName]);
      dataHandle.data.push({
        name: iterator[pieName],
        value: iterator[pieValue],
      });
    }
    return dataHandle;
  },
  /**
   * 单柱/折线数据处理方法
   * data: 数据源,
   * value: y轴数据属性名
   * xdata: x轴数据属性名
  */
  basicBarLine(data, value, xdata) {
    const dataHandle = {
      data: [],
      xData: [],
    };
    for (const iterator of data) {
      dataHandle.data.push(iterator[value]);
      dataHandle.xData.push(iterator[xdata]);
    }
    return dataHandle;
  },
  multipleBarLine_1(data, TempLegend, TempValue, TempXData) {
    const dataHandle = {
      legend: [],
      data: [],
      xData: [],
    };
    const temporary = {
      legend: [],
      data: {},
      xData: {},
    };
    let index = 0;
    for (const iterator of data) {
      if (temporary.data[iterator[`${TempLegend}`]] === undefined) {
        temporary.legend.push(iterator[`${TempLegend}`]);
        temporary.data[iterator[`${TempLegend}`]] = {};
        temporary.xData[iterator[`${TempLegend}`]] = [];
      }
      temporary.data[iterator[`${TempLegend}`]][iterator[`${TempXData}`]] = iterator[`${TempValue}`];
      temporary.xData[iterator[`${TempLegend}`]].push(iterator[`${TempXData}`]);
    }
    for (const iterator of temporary.legend) {
      dataHandle.legend.push(iterator);
      dataHandle.data[index] = [];
      for (const value of temporary.xData[temporary.legend[0]]) {
        dataHandle.data[index].push(temporary.data[iterator][value]);
      }
      index++;
    }
    dataHandle.xData = temporary.xData[temporary.legend[0]];
    return dataHandle;
  },
  /** 
   * name1: x轴数据
   * value1: y轴数据，数据类型Array<string>，存放value值的多个字段名
  */
  multipleBarLine_2(data, name1, value1) {
    const dataHandle = {
      data: [],
      xData: [],
      index: 0,
    };
    // tslint:disable-next-line:forin
    for (const key in value1) {
      dataHandle.data[key] = [];
    }
    for (const iterator of data) {
      dataHandle.xData.push(iterator[name1]);
      for (const value of value1) {
        dataHandle.data[dataHandle.index].push(iterator[value]);
        dataHandle.index++;
      }
      dataHandle.index = 0;
    }
    return dataHandle;
  }
}
export default chartHandleService