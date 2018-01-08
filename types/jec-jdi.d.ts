/*!
 * JEC JDI Node Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-jdi" {

export interface InjectableParams {    type?: Symbol;    types?: Array<Symbol>;    retention?: Array<string>;    qualifier?: string;    scope?: string;}export interface InjectParams {    type?: Symbol;    retention?: Array<string>;    qualifier?: string;}export function Inject(params?: InjectParams): Function;export function Injectable(params?: InjectableParams): Function;export enum ScopeType {    APPLICATION = "application",    SESSION = "session",    REQUEST = "request",}export class JdiError extends Error {    constructor(message: string);}export interface BeanManager {}export interface JDI {    getContainer(): JdiContainer;    getBeanManager(): BeanManager;}export interface JdiContainer {}export interface JdiContext {    getScope(): string;}export enum JdiConnectorRefs {    INJECT_PARAMETER_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#parameter",    INJECT_PROPERTY_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#property",    INJECTABLE_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Injectable",}}