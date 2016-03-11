import constants from './src/constants'
import {default as arrows, func} from './src/arrows'
import bs from './src/blockScope'

bs.forEach(a => a())
arrows();
func();
