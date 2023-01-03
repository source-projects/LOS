'use strict';

const lending = [ {
  subsection: 'count',
  subsection_title: 'Loan Volume By Count',
  section: 'distributions',
  section_title: 'Distributions',
  unit: 'count',
  description: '',
  cardTitle: 'Distributions - Loan Volume By Count',
  chartFunc: '_getLoanVolumeChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getMinimumScoreFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 0,
}, {
  subsection: 'amount',
  subsection_title: 'Loan Volume By Amount',
  section: 'distributions',
  section_title: 'Distributions',
  unit: 'dollar',
  description: '',
  cardTitle: 'Distributions - Loan Volume By Amount',
  chartFunc: '_getLoanVolumeChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getMinimumScoreFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 1,
}, {
  subsection: 'default_rates',
  subsection_title: 'Annual Default Rate',
  section: 'default_rates',
  section_title: 'Default Rates',
  unit: 'percentage',
  description: '',
  cardTitle: 'Annual Default Rates',
  chartFunc: '_getAnnualDefaultRateChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getDistributionGranularityFilter', '_getMinimumScoreFilter', '_yAxisAutoScalingFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 2,
}, {
  subsection: 'count',
  subsection_title: 'Cumulative Default Rate By Count',
  section: 'default_rates',
  section_title: 'Default Rates',
  unit: 'percentage',
  description: '',
  cardTitle: 'Cumulative Default Rate By Count',
  chartFunc: '_getCumulativeDefaultRateChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getDistributionGranularityFilter', '_getMinimumScoreFilter', '_yAxisAutoScalingFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 3,
}, {
  subsection: 'amount',
  subsection_title: 'Cumulative Default Rate By Amount',
  section: 'default_rates',
  section_title: 'Default Rates',
  unit: 'percentage',
  description: '',
  cardTitle: 'Cumulative Default Rate By Amount',
  chartFunc: '_getCumulativeDefaultRateChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getDistributionGranularityFilter', '_getMinimumScoreFilter', '_yAxisAutoScalingFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 4,
}, {
  subsection: 'count',
  subsection_title: 'Time Series By Count',
  section: 'default_rates',
  section_title: 'Default Rates',
  unit: 'percentage',
  description: '',
  cardTitle: 'Cumulative Default Rate Time Series By Count',
  chartFunc: '_getTimeSeriesChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getDistributionGranularityFilter', '_getMinimumScoreFilter', '_yAxisAutoScalingFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 5,
}, {
  subsection: 'amount',
  subsection_title: 'Time Series By Amount',
  section: 'default_rates',
  section_title: 'Default Rates',
  unit: 'percentage',
  description: '',
  cardTitle: 'Cumulative Default Rate Time Series By Amount',
  chartFunc: '_getTimeSeriesChart',
  filters: [ '_getProviderFilter', '_getDataSourceTypeFilter', '_getDistributionGranularityFilter', '_getMinimumScoreFilter', '_yAxisAutoScalingFilter' ],
  // dataFunc: '_transformDataSourceData',
  index: 6,
}];

module.exports = lending;