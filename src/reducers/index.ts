import { combineReducers } from 'redux';
import { memberReducer } from './member';
import { MemberEntity } from '../model';

export interface State {
    member: MemberEntity;

};

export const state = combineReducers<State>({
    member: memberReducer,

});
