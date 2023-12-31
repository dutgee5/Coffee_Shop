import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {produce} from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore =  create(
persist(
  (set, get) => ({
    CoffeeList: CoffeeData,
    BeansList: BeansData,
    CartPrice:0,
    FavoriteList:[],
    CartList:[],
    OrderHistoryList:[],
  }),
  {
    name: 'coffee-app',
    storage: createJSONStorage(() => AsyncStorage),
  },
));
