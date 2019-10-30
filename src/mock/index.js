import Mock from 'mockjs'
import listVersion from './data/version';

Mock.mock('news/api','post',listVersion);