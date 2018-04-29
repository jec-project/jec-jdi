/*!
 * JEC JDI Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-jdi" {

import { Member, Parameter, Interface } from "jec-commons";

export interface InjectableParams {
    type?: Interface;
    retention?: Array<string>;
    qualifiers?: Array<string>;
    scope?: ScopeType;
    name?: string;
}
export interface InjectParams {
    type?: Interface;
    retention?: Array<string>;
    qualifiers?: Array<string>;
    name?: string;
}
export function Inject(context: string | Interface | InjectParams): Function;
export function Injectable(params?: InjectableParams): Function;
export abstract class AbstractScope implements Scope {
    constructor(type: ScopeType);
    private _type;
    getType(): ScopeType;
}
export class ApplicationScoped extends AbstractScope implements Scope {
    constructor();
}
export class RequestScoped extends AbstractScope implements Scope {
    constructor();
}
export interface Scope {
    getType(): ScopeType;
}
export enum ScopeType {
    DEPENDENT = "dependent",
    APPLICATION = "application",
    SESSION = "session",
    REQUEST = "request",
}
export class SessionScoped extends AbstractScope implements Scope {
    constructor();
}
export class AmbiguousResolutionError extends JdiError {
    constructor(message: string);
}
export class InvalidInjectionPointError extends JdiError {
    constructor(target: any);
}
export class JdiError extends Error {
    constructor(message: string);
}
export class UnsatisfiedDependencyError extends JdiError {
    constructor(message: string);
}
export interface Bean {
    getScope(): Scope;
    getName(): string;
    getBeanClass(): any;
    getTypes(): Set<any>;
    getQualifiedClassName(): string;
    getInjectionPoints(): Array<InjectionPoint>;
}
export interface BeanManager {
    addBean(bean: Bean): void;
    getBeans(): Set<Bean>;
    getBeansByName(name: string): Set<Bean>;
    getBeansByType(type: any): Set<Bean>;
    getBeansByInjectionPoint(injectionPoint: InjectionPoint): Set<Bean>;
    addInjectionPoint(injectionPoint: InjectionPoint): void;
    getReference(bean: Bean): any;
}
export enum DecoratedType {
    FIELD = "field",
    PARAMETER = "parameter",
}
export interface InjectionContext {
    injectionTarget: InjectionTarget;
    beanRef: any;
}
export interface InjectionPoint {
    getBean(): Bean;
    getType(): any;
    getElement(): Member | Parameter;
    getQualifiedClassName(): string;
    getRef(): string;
    getQualifiers(): Array<string>;
}
export interface InjectionTarget {
    target: any;
    key: string | Symbol;
    parameterIndex: number;
    decoratedType: DecoratedType;
}
export interface Injector {
    inject(context: InjectionTarget): void;
    dispose(context: InjectionTarget): void;
}
export interface JDI {
    getContainer(): JdiContainer;
    getBeanManager(): BeanManager;
}
export interface JdiContainer {
    getId(): string;
    getBeanManager(): BeanManager;
    setBeanManager(beanManager: BeanManager): void;
}
export interface JdiContext {
}
export enum JdiConnectorRefs {
    INJECT_PARAMETER_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#parameter",
    INJECT_FIELD_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#field",
    INJECTABLE_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Injectable",
}
}