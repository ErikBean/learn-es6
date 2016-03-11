import constants from './constants'
import {default as arrows, func} from './arrows'
import bs from './blockScope'

bs.forEach(a => a())
arrows();
func();
