"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{B$:function(){return sh},Bt:function(){return ir},IO:function(){return sz},JU:function(){return sc},PL:function(){return s9},QT:function(){return s4},ad:function(){return sp},cf:function(){return s7},hJ:function(){return su},oe:function(){return s8},pl:function(){return s6},r7:function(){return s5}});var r,s,i=n(5816),a=n(8463),o=n(3333),l=n(4444),u=n(3510);n(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.18.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function p(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(w);f.debug(`Firestore (${d}): ${e}`,...n)}}function g(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(w);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(w);f.warn(`Firestore (${d}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw g(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>r(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class N{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||v(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class k{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new N(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.A=e.token,new D(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new V(0,0))}static max(){return new M(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),s=t.get(r);if(n<s)return -1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends F{construct(e,t,n){return new O(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends F{construct(e,t,n){return new P(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,s=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},i=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(O.fromString(e))}static fromName(e){return new q(O.fromString(e).popFirst(5))}static empty(){return new q(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new O(e.slice()))}}class K{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new K(M.min(),q.empty(),-1)}static max(){return new K(M.max(),q.empty(),-1)}}class ${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof G?t:G.resolve(t)}catch(e){return G.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,n)=>{t(e)})}static reject(e){return new G((t,n)=>{n(e)})}static waitFor(e){return new G((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=G.resolve(!1);for(let n of e)t=t.next(e=>e?G.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new G((n,r)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new G((n,r)=>{let s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function Q(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}z.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,n,r,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class H{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new H("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof H&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Y(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function X(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new Z("Invalid base64 string: "+e):e}}(e);return new ee(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");let et=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(e){if(e||v(),"string"==typeof e){let t=0,n=et.exec(e);if(n||v(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:er(e.seconds),nanos:er(e.nanos)}}function er(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function es(e){return"string"==typeof e?ee.fromBase64String(e):ee.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ea(e){let t=en(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function el(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ei(e)?4:eT(e)?9007199254740991:10:v()}function eu(e,t){if(e===t)return!0;let n=el(e);if(n!==el(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ea(e).isEqual(ea(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=en(e.timestampValue),r=en(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return es(e.bytesValue).isEqual(es(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return er(e.geoPointValue.latitude)===er(t.geoPointValue.latitude)&&er(e.geoPointValue.longitude)===er(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return er(e.integerValue)===er(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=er(e.doubleValue),r=er(t.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],eu);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(W(n)!==W(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eu(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function eh(e,t){return void 0!==(e.values||[]).find(e=>eu(e,t))}function ec(e,t){if(e===t)return 0;let n=el(e),r=el(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=er(e.integerValue||e.doubleValue),r=er(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ed(e.timestampValue,t.timestampValue);case 4:return ed(ea(e),ea(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let n=es(e),r=es(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=x(n[e],r[e]);if(0!==t)return t}return x(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=x(er(e.latitude),er(t.latitude));return 0!==n?n:x(er(e.longitude),er(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ec(n[e],r[e]);if(t)return t}return x(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eo.mapValue&&t===eo.mapValue)return 0;if(e===eo.mapValue)return 1;if(t===eo.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){let t=x(r[e],i[e]);if(0!==t)return t;let a=ec(n[r[e]],s[i[e]]);if(0!==a)return a}return x(r.length,i.length)}(e.mapValue,t.mapValue);default:throw v()}}function ed(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let n=en(e),r=en(t),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function ef(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=en(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?es(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,q.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ef(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let s of t)r?r=!1:n+=",",n+=`${s}:${ef(e.fields[s])}`;return n+"}"}(e.mapValue):v()}function em(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ep(e){return!!e&&"integerValue"in e}function eg(e){return!!e&&"arrayValue"in e}function ey(e){return!!e&&"nullValue"in e}function ew(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ev(e){return!!e&&"mapValue"in e}function eE(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Y(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eE(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eE(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eT(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.position=e,this.inclusive=t}}function eA(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(r=i.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),n.key):ec(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function eC(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eu(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{}class e_ extends eS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eb(e,t,n):"array-contains"===t?new eV(e,n):"in"===t?new eM(e,n):"not-in"===t?new eF(e,n):"array-contains-any"===t?new eO(e,n):new e_(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eR(e,n):new ex(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ec(t,this.value)):null!==t&&el(this.value)===el(t)&&this.matchesComparison(ec(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eN extends eS{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new eN(e,t)}matches(e){return ek(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.dt(e=>e.isInequality());return null!==e?e.field:null}dt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function ek(e){return"and"===e.op}function eD(e){for(let t of e.filters)if(t instanceof eN)return!1;return!0}class eb extends e_{constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eR extends e_{constructor(e,t){super(e,"in",t),this.keys=eL("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ex extends e_{constructor(e,t){super(e,"not-in",t),this.keys=eL("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eL(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>q.fromName(e.referenceValue))}class eV extends e_{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eg(t)&&eh(t.arrayValue,this.value)}}class eM extends e_{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eh(this.value.arrayValue,t)}}class eF extends e_{constructor(e,t){super(e,"not-in",t)}matches(e){if(eh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eh(this.value.arrayValue,t)}}class eO extends e_{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eh(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.comparator=e,this.root=t||eK.EMPTY}insert(e,t){return new eP(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eK.BLACK,null,null))}remove(e){return new eP(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eK.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eq(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eq(this.root,e,this.comparator,!1)}getReverseIterator(){return new eq(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eq(this.root,e,this.comparator,!0)}}class eq{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eK{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:eK.RED,this.left=null!=r?r:eK.EMPTY,this.right=null!=s?s:eK.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new eK(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,s=n(e,r.key);return(r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eK.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eK.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eK.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eK.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}eK.EMPTY=null,eK.RED=!0,eK.BLACK=!1,eK.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,s){return this}insert(e,t,n){return new eK(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e){this.comparator=e,this.data=new eP(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eB(this.data.getIterator())}getIteratorFrom(e){return new eB(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof e$)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new e$(this.comparator);return t.data=e,t}}class eB{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new eG([])}unionWith(e){let t=new e$(P.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eG(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.value=e}static empty(){return new eQ({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ev(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eE(t)}setAll(e){let t=P.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=eE(e):r.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){let t=this.field(e.popLast());ev(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ev(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(Y(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eQ(eE(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e,t,n,r,s,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new ez(e,0,M.min(),M.min(),M.min(),eQ.empty(),0)}static newFoundDocument(e,t,n,r){return new ez(e,1,t,M.min(),n,r,0)}static newNoDocument(e,t){return new ez(e,2,t,M.min(),M.min(),eQ.empty(),0)}static newUnknownDocument(e,t){return new ez(e,3,t,M.min(),M.min(),eQ.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(M.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eQ.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eQ.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ez&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ez(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this._t=null}}function eH(e,t=null,n=[],r=[],s=null,i=null,a=null){return new ej(e,t,n,r,s,i,a)}function eW(e){let t=e;if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof e_)return t.field.canonicalString()+t.op.toString()+ef(t.value);if(eD(t)&&ek(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ef(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ef(e)).join(",")),t._t=e}return t._t}function eY(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var n,r;if(n=e.orderBy[s],r=t.orderBy[s],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e_?n instanceof e_&&t.op===n.op&&t.field.isEqual(n.field)&&eu(t.value,n.value):t instanceof eN?n instanceof eN&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,s)=>t&&e(r,n.filters[s]),!0):void v()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eC(e.startAt,t.startAt)&&eC(e.endAt,t.endAt)}function eX(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.wt=null,this.gt=null,this.startAt,this.endAt}}function eZ(e){return new eJ(e)}function e0(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e1(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function e2(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function e4(e){return null!==e.collectionGroup}function e3(e){let t=e;if(null===t.wt){t.wt=[];let e=e2(t),n=e1(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new eU(e)),t.wt.push(new eU(P.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new eU(P.keyField(),e))}}}return t.wt}function e9(e){let t=e;if(!t.gt){if("F"===t.limitType)t.gt=eH(t.path,t.collectionGroup,e3(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of e3(t)){let t="desc"===n.dir?"asc":"desc";e.push(new eU(n.field,t))}let n=t.endAt?new eI(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eI(t.startAt.position,t.startAt.inclusive):null;t.gt=eH(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t.gt}function e6(e,t){t.getFirstInequalityField(),e2(e);let n=e.filters.concat([t]);return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function e5(e,t,n){return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e8(e,t){return eY(e9(e),e9(t))&&e.limitType===t.limitType}function e7(e){return`${eW(e9(e))}|lt:${e.limitType}`}function te(e){var t;let n;return`Query(target=${n=(t=e9(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e_?`${t.field.canonicalString()} ${t.op} ${ef(t.value)}`:t instanceof eN?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ef(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ef(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tt(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):q.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e3(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eA(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e3(e),t))&&(!e.endAt||!!function(e,t,n){let r=eA(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e3(e),t))}function tn(e){return(t,n)=>{let r=!1;for(let s of e3(e)){let e=function(e,t,n){let r=e.field.isKeyField()?q.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?ec(r,s):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return v()}}(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function ts(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this._=void 0}}function ta(e,t){return e instanceof td?ep(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class to extends ti{}class tl extends ti{constructor(e){super(),this.elements=e}}function tu(e,t){let n=tm(t);for(let t of e.elements)n.some(e=>eu(e,t))||n.push(t);return{arrayValue:{values:n}}}class th extends ti{constructor(e){super(),this.elements=e}}function tc(e,t){let n=tm(t);for(let t of e.elements)n=n.filter(e=>!eu(e,t));return{arrayValue:{values:n}}}class td extends ti{constructor(e,t){super(),this.Tt=e,this.It=t}}function tf(e){return er(e.integerValue||e.doubleValue)}function tm(e){return eg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t){this.field=e,this.transform=t}}class tg{constructor(e,t){this.version=e,this.transformResults=t}}class ty{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ty}static exists(e){return new ty(void 0,e)}static updateTime(e){return new ty(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tw(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tv{}function tE(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tk(e.key,ty.none()):new tA(e.key,e.data,ty.none());{let n=e.data,r=eQ.empty(),s=new e$(P.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new tC(e.key,r,new eG(s.toArray()),ty.none())}}function tT(e,t,n,r){return e instanceof tA?function(e,t,n,r){if(!tw(e.precondition,t))return n;let s=e.value.clone(),i=tN(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof tC?function(e,t,n,r){if(!tw(e.precondition,t))return n;let s=tN(e.fieldTransforms,r,t),i=t.data;return(i.setAll(tS(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tw(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tI(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tl&&r instanceof tl||n instanceof th&&r instanceof th?L(n.elements,r.elements,eu):n instanceof td&&r instanceof td?eu(n.It,r.It):n instanceof to&&r instanceof to)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tA extends tv{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tC extends tv{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tS(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t_(e,t,n){var r;let s=new Map;e.length===n.length||v();for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(r=n[i],o instanceof tl?tu(o,l):o instanceof th?tc(o,l):r))}return s}function tN(e,t,n){let r=new Map;for(let s of e){let e=s.transform,i=n.data.field(s.field);r.set(s.field,e instanceof to?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,i):e instanceof tl?tu(e,i):e instanceof th?tc(e,i):function(e,t){let n=ta(e,t),r=tf(n)+tf(e.It);return ep(n)&&ep(e.It)?ts(r):tr(e.Tt,r)}(e,i))}return r}class tk extends tv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tD extends tv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.count=e}}function tR(e){if(void 0===e)return g("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(s=r||(r={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Y(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return X(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tL=new eP(q.comparator),tV=new eP(q.comparator);function tM(...e){let t=tV;for(let n of e)t=t.insert(n.key,n);return t}function tF(e){let t=tV;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tO(){return new tx(e=>e.toString(),(e,t)=>e.isEqual(t))}let tU=new eP(q.comparator),tP=new e$(q.comparator);function tq(...e){let t=tP;for(let n of e)t=t.add(n);return t}let tK=new e$(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tB.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new t$(M.min(),r,tK,tL,tq())}}class tB{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tB(n,t,tq(),tq(),tq())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t,n,r){this.Et=e,this.removedTargetIds=t,this.key=n,this.At=r}}class tQ{constructor(e,t){this.targetId=e,this.Rt=t}}class tz{constructor(e,t,n=ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tj{constructor(){this.Pt=0,this.vt=tY(),this.bt=ee.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return 0!==this.Pt}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=tq(),t=tq(),n=tq();return this.vt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new tB(this.bt,this.Vt,e,t,n)}kt(){this.St=!1,this.vt=tY()}$t(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class tH{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=tL,this.Kt=tW(),this.Gt=new e$(x)}Qt(e){for(let t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(let t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{let n=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&n.xt(e.resumeToken);break;case 1:n.Ft(),n.Dt||n.kt(),n.xt(e.resumeToken);break;case 2:n.Ft(),n.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(n.Bt(),n.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),n.xt(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((e,n)=>{this.Jt(n)&&t(n)})}Zt(e){let t=e.targetId,n=e.Rt.count,r=this.Xt(t);if(r){let e=r.target;if(eX(e)){if(0===n){let n=new q(e.path);this.zt(t,n,ez.newNoDocument(n,M.min()))}else 1===n||v()}else this.te(t)!==n&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){let t=new Map;this.qt.forEach((n,r)=>{let s=this.Xt(r);if(s){if(n.current&&eX(s.target)){let t=new q(s.target.path);null!==this.Ut.get(t)||this.ne(r,t)||this.zt(r,t,ez.newNoDocument(t,e))}n.Ct&&(t.set(r,n.Nt()),n.kt())}});let n=tq();this.Kt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new t$(e,t,this.Gt,this.Ut,n);return this.Ut=tL,this.Kt=tW(),this.Gt=new e$(x),r}jt(e,t){if(!this.Jt(e))return;let n=this.ne(e,t.key)?2:0;this.Ht(e).$t(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,n){if(!this.Jt(e))return;let r=this.Ht(e);this.ne(e,t)?r.$t(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.qt.delete(e)}te(e){let t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let t=this.qt.get(e);return t||(t=new tj,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new e$(x),this.Kt=this.Kt.insert(e,t)),t}Jt(e){let t=null!==this.Xt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new tj),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function tW(){return new eP(q.comparator)}function tY(){return new eP(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tX={asc:"ASCENDING",desc:"DESCENDING"},tJ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tZ={and:"AND",or:"OR"};class t0{constructor(e,t){this.databaseId=e,this.yt=t}}function t1(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t2(e,t){return e.yt?t.toBase64():t.toUint8Array()}function t4(e){return e||v(),M.fromTimestamp(function(e){let t=en(e);return new V(t.seconds,t.nanos)}(e))}function t3(e,t){return new O(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t9(e){let t=O.fromString(e);return ns(t)||v(),t}function t6(e,t){return t3(e.databaseId,t.path)}function t5(e,t){let n=t9(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(ne(n))}function t8(e,t){return t3(e.databaseId,t)}function t7(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ne(e){return e.length>4&&"documents"===e.get(4)||v(),e.popFirst(5)}function nt(e,t,n){return{name:t6(e,t),fields:n.value.mapValue.fields}}function nn(e){return{fieldPath:e.canonicalString()}}function nr(e){return P.fromServerFormat(e.fieldPath)}function ns(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var r;r=n[t],s instanceof tA?function(e,t,n){let r=e.value.clone(),s=t_(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(s,e,r):s instanceof tC?function(e,t,n){if(!tw(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t_(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(tS(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(s,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tT(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tT(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tO();return this.mutations.forEach(r=>{let s=e.get(r.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields);a=t.has(r.key)?null:a;let o=tE(i,a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tq())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>tI(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>tI(e,t))}}class na{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||v();let r=tU,s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new na(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n,r,s=M.min(),i=M.min(),a=ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new nl(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new nl(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.oe=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(er(e.integerValue));else if("doubleValue"in e){let n=er(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),J(n)?t.de(0):t.de(n))}else if("timestampValue"in e){let n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(es(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?eT(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):v()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){let n=e.fields||{};for(let e of(this.fe(t,55),Object.keys(n)))this.we(e,t),this.he(n[e],t)}Ie(e,t){let n=e.values||[];for(let e of(this.fe(t,50),n))this.he(e,t)}ye(e,t){this.fe(t,37),q.fromName(e).path.forEach(e=>{this.fe(t,60),this.Te(e,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}nh.Ee=new nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.Ze=new nd}addToCollectionParentIndex(e,t){return this.Ze.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(K.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(K.min())}updateCollectionGroup(e,t,n){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class nd{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new e$(O.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new e$(O.comparator)).toArray()}}new Uint8Array(0);class nf{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nf(e,nf.DEFAULT_COLLECTION_PERCENTILE,nf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nf.DEFAULT_COLLECTION_PERCENTILE=10,nf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nf.DEFAULT=new nf(41943040,nf.DEFAULT_COLLECTION_PERCENTILE,nf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nf.DISABLED=new nf(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new nm(0)}static Sn(){return new nm(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.changes=new tx(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ez.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?G.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tT(n.mutation,e,eG.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tq()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tq()){let r=tO();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tM();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tO();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tq()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=tL,i=tO(),a=tO();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tC)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tT(a.mutation,t,a.mutation.getFieldMask(),V.now())):i.set(t.key,eG.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new ng(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tO(),r=new eP((e,t)=>e-t),s=tq();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=n.get(e)||eG.empty();a=s.applyToLocalView(i,a),n.set(e,a);let o=(r.get(s.batchId)||tq()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{let i=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tO();l.forEach(e=>{if(!s.has(e)){let r=tE(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return G.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{let i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):G.resolve(tO()),a=-1,o=s;return i.next(t=>G.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?G.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tq())).next(e=>({batchId:a,changes:tF(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=tM();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,s=tM();return this.indexManager.getCollectionParents(e,r).next(i=>G.forEach(i,i=>{var a;let o=(a=i.child(r),new eJ(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,ez.newInvalidDocument(r)))});let n=tM();return e.forEach((e,s)=>{let i=r.get(e);void 0!==i&&tT(i.mutation,s,eG.empty(),V.now()),tt(t,s)&&(n=n.insert(e,s))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return G.resolve(this.es.get(t))}saveBundleMetadata(e,t){return this.es.set(t.id,{id:t.id,version:t.version,createTime:t4(t.createTime)}),G.resolve()}getNamedQuery(e,t){return G.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,s,i,a,o,l;let u,h=function(e){let t=t9(e);return 4===t.length?O.emptyPath():ne(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||v();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nr(e.unaryFilter.field);return e_.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nr(e.unaryFilter.field);return e_.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nr(e.unaryFilter.field);return e_.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=nr(e.unaryFilter.field);return e_.create(s,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?e_.create(nr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eN.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op)):v()}(e);return n instanceof eN&&eD(t=n)&&ek(t)?n.getFilters():[n]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eU(nr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;c.limit&&(g=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eI(n,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new eI(n,t)}(c.endAt)),n=h,r=f,s=p,i=m,a=g,o=y,l=w,new eJ(n,r,s,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e5(t,t.limit,"L"):t}(t.bundledQuery),readTime:t4(t.readTime)}),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.overlays=new eP(q.comparator),this.ss=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tO();return G.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ce(e,t,r)}),G.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ss.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ss.delete(n)),G.resolve()}getOverlaysForCollection(e,t,n){let r=tO(),s=t.length+1,i=new q(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return G.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new eP((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=tO(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tO(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return G.resolve(a)}ce(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new no(t,n));let s=this.ss.get(t);void 0===s&&(s=tq(),this.ss.set(t,s)),this.ss.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.rs=new e$(nT.os),this.us=new e$(nT.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){let n=new nT(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ls(new nT(e,t))}fs(e,t){e.forEach(e=>this.removeReference(e,t))}ds(e){let t=new q(new O([])),n=new nT(t,e),r=new nT(t,e+1),s=[];return this.us.forEachInRange([n,r],e=>{this.ls(e),s.push(e.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){let t=new q(new O([])),n=new nT(t,e),r=new nT(t,e+1),s=tq();return this.us.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new nT(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nT{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return q.comparator(e.key,t.key)||x(e.gs,t.gs)}static cs(e,t){return x(e.gs,t.gs)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new e$(nT.os)}checkEmpty(e){return G.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new ni(s,t,n,r);for(let t of(this.mutationQueue.push(i),r))this.ps=this.ps.add(new nT(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return G.resolve(i)}lookupMutationBatch(e,t){return G.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ts(t+1),r=n<0?0:n;return G.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nT(t,0),r=new nT(t,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([n,r],e=>{let t=this.Is(e.gs);s.push(t)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new e$(x);return t.forEach(e=>{let t=new nT(e,0),r=new nT(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],e=>{n=n.add(e.gs)})}),G.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,s=n;q.isDocumentKey(s)||(s=s.child(""));let i=new nT(new q(s),0),a=new e$(x);return this.ps.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gs)),!0)},i),G.resolve(this.Es(a))}Es(e){let t=[];return e.forEach(e=>{let n=this.Is(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.As(t.batchId,"removed")||v(),this.mutationQueue.shift();let n=this.ps;return G.forEach(t.mutations,r=>{let s=new nT(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=n})}Pn(e){}containsKey(e,t){let n=new nT(t,0),r=this.ps.firstAfterOrEqual(n);return G.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){let t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.Rs=e,this.docs=new eP(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return G.resolve(n?n.document.mutableCopy():ez.newInvalidDocument(t))}getEntries(e,t){let n=tL;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ez.newInvalidDocument(e))}),G.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=tL,i=t.path,a=new q(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=q.comparator(e.documentKey,t.documentKey))?n:x(e.largestBatchId,t.largestBatchId)}(new K(a.readTime,a.key,-1),n)||(r.has(a.key)||tt(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,t,n,r){v()}Ps(e,t){return G.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nC(this)}getSize(e){return G.resolve(this.size)}}class nC extends np{constructor(e){super(),this.Xn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(n)}),G.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.persistence=e,this.vs=new tx(e=>eW(e),eY),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.bs=0,this.Vs=new nE,this.targetCount=0,this.Ss=nm.Vn()}forEachTarget(e,t){return this.vs.forEach((e,n)=>t(n)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),G.resolve()}xn(e){this.vs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ss=new nm(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.xn(t),G.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,n){let r=0,s=[];return this.vs.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.vs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),G.waitFor(s).next(()=>r)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){let n=this.vs.get(t)||null;return G.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),G.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);let r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),G.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Vs.ws(t);return G.resolve(n)}containsKey(e,t){return G.resolve(this.Vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){var n;this.Ds={},this.overlays={},this.Cs=new z(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new nS(this),this.indexManager=new nc,this.remoteDocumentCache=(n=e=>this.referenceDelegate.ks(e),new nA(n)),this.Tt=new nu(t),this.$s=new nw(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new nI(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let r=new nN(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Fs(e,t){return G.or(Object.values(this.Ds).map(n=>()=>n.containsKey(e,t)))}}class nN extends ${constructor(e){super(),this.currentSequenceNumber=e}}class nk{constructor(e){this.persistence=e,this.Bs=new nE,this.Ls=null}static qs(e){return new nk(e)}get Us(){if(this.Ls)return this.Ls;throw v()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),G.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),G.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(e=>this.Us.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Us.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ms(){this.Ls=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Us,n=>{let r=q.fromPath(n);return this.Ks(e,r).next(e=>{e||t.removeEntry(r,M.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return G.or([()=>G.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=r}static Ni(e,t){let n=tq(),r=tq();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nD(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Mi(e,t).next(s=>s||this.Oi(e,t,r,n)).next(n=>n||this.Fi(e,t))}Mi(e,t){if(e0(t))return G.resolve(null);let n=e9(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e9(t=e5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let s=tq(...r);return this.$i.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let i=this.Bi(t,r);return this.Li(t,i,s,n.readTime)?this.Mi(e,e5(t,null,"F")):this.qi(e,i,t,n)}))})))}Oi(e,t,n,r){return e0(t)||r.isEqual(M.min())?this.Fi(e,t):this.$i.getDocuments(e,n).next(s=>{let i=this.Bi(t,s);return this.Li(t,i,n,r)?this.Fi(e,t):(m()<=o.in.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),te(t)),this.qi(e,i,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=M.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r));return new K(s,q.empty(),-1)}(r,0)))})}Bi(e,t){let n=new e$(tn(e));return t.forEach((t,r)=>{tt(e,r)&&(n=n.add(r))}),n}Li(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fi(e,t){return m()<=o.in.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",te(t)),this.$i.getDocumentsMatchingQuery(e,t,K.min())}qi(e,t,n,r){return this.$i.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,n,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new eP(x),this.Gi=new tx(e=>eW(e),eY),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ny(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}async function nx(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.zi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let s=[],i=[],a=tq();for(let e of r)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Wi:e,removedBatchIds:s,addedBatchIds:i}))})})}function nL(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}async function nV(e,t,n){let r=e,s=r.Ki.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Q(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ki=r.Ki.remove(t),r.Gi.delete(s.target)}function nM(e,t,n){let r=M.min(),s=tq();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,n){let r=e.Gi.get(n);return void 0!==r?G.resolve(e.Ki.get(r)):e.Ns.getTargetData(t,n)})(e,i,e9(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ns.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.Ui.getDocumentsMatchingQuery(i,t,n?r:M.min(),n?s:tq())).next(n=>{var r;let i;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.Qi.get(r)||M.min(),n.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Qi.set(r,i),{documents:n,Yi:s}}))}class nF{constructor(){this.activeTargetIds=tK}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nO{constructor(){this.Ur=new nF,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new nF,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Hr))e(0)}Wr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Hr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nq=null;function nK(){return null===nq?nq=268435456+Math.round(2147483648*Math.random()):nq++,"0x"+nq.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nG="WebChannelConnection";class nQ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,r,s){let i=nK(),a=this.fo(e,t);p("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);let o={};return this._o(o,r,s),this.wo(e,a,o,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}mo(e,t,n,r,s,i){return this.lo(e,t,n,r,s)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}fo(e,t){let n=n$[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,r){let s=nK();return new Promise((i,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();p(nG,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:p(nG,`RPC '${e}' ${s} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(p(nG,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p(nG,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);p(nG,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}yo(e,t,n){let s=nK(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this._o(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");p(nG,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,f=!1,m=new nB({Yr:t=>{f?p(nG,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(d||(p(nG,`Opening RPC '${e}' stream ${s} transport.`),c.open(),d=!0),p(nG,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},Zr:()=>c.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(c,u.ii.EventType.OPEN,()=>{f||p(nG,`RPC '${e}' stream ${s} transport opened.`)}),g(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,p(nG,`RPC '${e}' stream ${s} transport closed`),m.oo())}),g(c,u.ii.EventType.ERROR,t=>{f||(f=!0,y(nG,`RPC '${e}' stream ${s} transport errored:`,t),m.oo(new T(E.UNAVAILABLE,"The operation could not be completed")))}),g(c,u.ii.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||v();let a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){p(nG,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return tR(t)}(t),i=a.message;void 0===n&&(n=E.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,m.oo(new T(n,i)),c.close()}else p(nG,`RPC '${e}' stream ${s} received:`,i),m.uo(i)}}),g(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?p(nG,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===u.kN.NOPROXY&&p(nG,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.ro()},0),m}}function nz(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(e){return new t0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=r,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();let t=Math.floor(this.Eo+this.bo()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t,n,r,s,i,a,o){this.Ys=e,this.So=n,this.Do=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new nH(e,t)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;let e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Co===t&&this.jo(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)})})}jo(e,t){let n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{n(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(e=>{n(()=>this.zo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nY extends nW{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.Tt=s}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();let t=function(e,t){let n;if("targetChange"in t){var r,s;t.targetChange;let i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.yt?(void 0===s||"string"==typeof s||v(),ee.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||v(),ee.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tR(e.code);return new T(t,e.message||"")}(l);n=new tz(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let s=t5(e,r.document.name),i=t4(r.document.updateTime),a=r.document.createTime?t4(r.document.createTime):M.min(),o=new eQ({mapValue:{fields:r.document.fields}}),l=ez.newFoundDocument(s,i,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];n=new tG(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let s=t5(e,r.document),i=r.readTime?t4(r.readTime):M.min(),a=ez.newNoDocument(s,i),o=r.removedTargetIds||[];n=new tG([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let s=t5(e,r.document),i=r.removedTargetIds||[];n=new tG([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,s=new tb(r),i=e.targetId;n=new tQ(i,s)}}return n}(this.Tt,e),n=function(e){if(!("targetChange"in e))return M.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?M.min():t.readTime?t4(t.readTime):M.min()}(e);return this.listener.Ho(t,n)}Jo(e){let t={};t.database=t7(this.Tt),t.addTarget=function(e,t){let n;let r=t.target;return(n=eX(r)?{documents:{documents:[t8(e,r.path)]}}:{query:function(e,t){var n,r,s;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i.parent=t8(e,a),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=t8(e,a.popLast()),i.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e_?function(e){if("=="===e.op){if(ew(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(ey(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ew(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(ey(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:tJ[e.op],value:e.value}}}(t):t instanceof eN?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:tZ[t.op],filters:n}}}(t):v()}(eN.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nn(e.field),direction:tX[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=(r=t.limit,e.yt||null==r?r:{value:r});return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=t2(e,t.resumeToken):t.snapshotVersion.compareTo(M.min())>0&&(n.readTime=t1(e,t.snapshotVersion.toTimestamp())),n}(this.Tt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.Tt,e);n&&(t.labels=n),this.qo(t)}Yo(e){let t={};t.database=t7(this.Tt),t.removeTarget=e,this.qo(t)}}class nX extends nW{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||v(),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||v(),t.map(e=>{let t;return(t=e.updateTime?t4(e.updateTime):t4(n)).isEqual(M.min())&&(t=t4(n)),new tg(t,e.transformResults||[])})):[]),s=t4(e.commitTime);return this.listener.eu(s,r)}return e.writeResults&&0!==e.writeResults.length&&v(),this.Zo=!0,this.listener.nu()}su(){let e={};e.database=t7(this.Tt),this.qo(e)}tu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tA)r={update:nt(e,t.key,t.value)};else if(t instanceof tk)r={delete:t6(e,t.key)};else if(t instanceof tC)r={update:nt(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tD))return v();r={verify:t6(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof to)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof th)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof td)return{fieldPath:t.field.canonicalString(),increment:n.It};throw v()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:t1(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:v()),r})(this.Tt,e))};this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.lo(e,t,n,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}mo(e,t,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.mo(e,t,n,s,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.iu=!0}}class nZ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(g(t),this.cu=!1):p("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(e=>{n.enqueueAndForget(async()=>{n7(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.mu.add(4),await n2(e),e.pu.set("Unknown"),e.mu.delete(4),await n1(e)}(this))})}),this.pu=new nZ(n,r)}}async function n1(e){if(n7(e))for(let t of e.gu)await t(!0)}async function n2(e){for(let t of e.gu)await t(!1)}function n4(e,t){e.wu.has(t.targetId)||(e.wu.set(t.targetId,t),n8(e)?n5(e):rm(e).Mo()&&n9(e,t))}function n3(e,t){let n=rm(e);e.wu.delete(t),n.Mo()&&n6(e,t),0===e.wu.size&&(n.Mo()?n.Bo():n7(e)&&e.pu.set("Unknown"))}function n9(e,t){e.Iu.Ot(t.targetId),rm(e).Jo(t)}function n6(e,t){e.Iu.Ot(t),rm(e).Yo(t)}function n5(e){e.Iu=new tH({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),rm(e).start(),e.pu.au()}function n8(e){return n7(e)&&!rm(e).$o()&&e.wu.size>0}function n7(e){return 0===e.mu.size}async function re(e){e.wu.forEach((t,n)=>{n9(e,t)})}async function rt(e,t){e.Iu=void 0,n8(e)?(e.pu.fu(t),n5(e)):e.pu.set("Unknown")}async function rn(e,t,n){if(e.pu.set("Online"),t instanceof tz&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.wu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.wu.delete(r),e.Iu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rr(e,n)}else if(t instanceof tG?e.Iu.Qt(t):t instanceof tQ?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(M.min()))try{let t=await nL(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Iu.ee(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let s=e.wu.get(r);s&&e.wu.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.wu.get(t);if(!n)return;e.wu.set(t,n.withResumeToken(ee.EMPTY_BYTE_STRING,n.snapshotVersion)),n6(e,t);let r=new nl(n.target,t,1,n.sequenceNumber);n9(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await rr(e,t)}}async function rr(e,t,n){if(!Q(t))throw t;e.mu.add(1),await n2(e),e.pu.set("Offline"),n||(n=()=>nL(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await n1(e)})}function rs(e,t){return t().catch(n=>rr(e,n,t))}async function ri(e){let t=rp(e),n=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;n7(e)&&e._u.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e._u.length&&t.Bo();break}n=r.batchId,function(e,t){e._u.push(t);let n=rp(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}(e,r)}catch(t){await rr(e,t)}ra(e)&&ro(e)}function ra(e){return n7(e)&&!rp(e).$o()&&e._u.length>0}function ro(e){rp(e).start()}async function rl(e){rp(e).su()}async function ru(e){let t=rp(e);for(let n of e._u)t.tu(n.mutations)}async function rh(e,t,n){let r=e._u.shift(),s=na.from(r,t,n);await rs(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ri(e)}async function rc(e,t){t&&rp(e).Xo&&await async function(e,t){var n;if(function(e){switch(e){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let n=e._u.shift();rp(e).Fo(),await rs(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ri(e)}}(e,t),ra(e)&&ro(e)}async function rd(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=n7(e);e.mu.add(3),await n2(e),n&&e.pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.mu.delete(3),await n1(e)}async function rf(e,t){t?(e.mu.delete(2),await n1(e)):t||(e.mu.add(2),await n2(e),e.pu.set("Unknown"))}function rm(e){var t,n,r;return e.Tu||(e.Tu=(t=e.datastore,n=e.asyncQueue,r={Xr:re.bind(null,e),no:rt.bind(null,e),Ho:rn.bind(null,e)},t.ru(),new nY(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),e.gu.push(async t=>{t?(e.Tu.Fo(),n8(e)?n5(e):e.pu.set("Unknown")):(await e.Tu.stop(),e.Iu=void 0)})),e.Tu}function rp(e){var t,n,r;return e.Eu||(e.Eu=(t=e.datastore,n=e.asyncQueue,r={Xr:rl.bind(null,e),no:rc.bind(null,e),nu:ru.bind(null,e),eu:rh.bind(null,e)},t.ru(),new nX(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),e.gu.push(async t=>{t?(e.Eu.Fo(),await ri(e)):(await e.Eu.stop(),e._u.length>0&&(p("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,s){let i=Date.now()+n,a=new rg(e,t,i,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(e,t){if(g("AsyncQueue",`${t}: ${e}`),Q(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=tM(),this.sortedSet=new eP(this.comparator)}static emptySet(e){return new rw(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rw)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rw;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.Au=new eP(q.comparator)}track(e){let t=e.doc.key,n=this.Au.get(t);n?0!==e.type&&3===n.type?this.Au=this.Au.insert(t,e):3===e.type&&1!==n.type?this.Au=this.Au.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Au=this.Au.remove(t):1===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):v():this.Au=this.Au.insert(t,e)}Ru(){let e=[];return this.Au.inorderTraversal((t,n)=>{e.push(n)}),e}}class rE{constructor(e,t,n,r,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new rE(e,t,rw.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.Pu=void 0,this.listeners=[]}}class rI{constructor(){this.queries=new tx(e=>e7(e),e8),this.onlineState="Unknown",this.vu=new Set}}async function rA(e,t){let n=t.query,r=!1,s=e.queries.get(n);if(s||(r=!0,s=new rT),r)try{s.Pu=await e.onListen(n)}catch(n){let e=ry(n,`Initialization of query '${te(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,s),s.listeners.push(t),t.bu(e.onlineState),s.Pu&&t.Vu(s.Pu)&&rN(e)}async function rC(e,t){let n=t.query,r=!1,s=e.queries.get(n);if(s){let e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function rS(e,t){let n=!1;for(let r of t){let t=r.query,s=e.queries.get(t);if(s){for(let e of s.listeners)e.Vu(r)&&(n=!0);s.Pu=r}}n&&rN(e)}function r_(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function rN(e){e.vu.forEach(e=>{e.next()})}class rk{constructor(e,t,n){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rE(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){return!e.fromCache||(!this.options.$u||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}xu(e){if(e.docChanges.length>0)return!0;let t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ku(e){e=rE.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.key=e}}class rb{constructor(e){this.key=e}}class rR{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=tq(),this.mutatedKeys=tq(),this.ju=tn(e),this.zu=new rw(this.ju)}get Wu(){return this.Ku}Hu(e,t){let n=t?t.Ju:new rv,r=t?t.zu:this.zu,s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tt(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Yu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.ju(h,o)>0||l&&0>this.ju(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{zu:i,Ju:n,Li:a,mutatedKeys:s}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;let s=e.Ju.Ru();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)})(e.type,t.type)||this.ju(e.doc,t.doc)),this.Zu(n);let i=t?this.Xu():[],a=0===this.Qu.size&&this.current?1:0,o=a!==this.Gu;return(this.Gu=a,0!==s.length||o)?{snapshot:new rE(this.query,e.zu,r,s,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:i}:{tc:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new rv,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(e=>this.Ku=this.Ku.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ku=this.Ku.delete(e)),this.current=e.current)}Xu(){if(!this.current)return[];let e=this.Qu;this.Qu=tq(),this.zu.forEach(e=>{this.ec(e.key)&&(this.Qu=this.Qu.add(e.key))});let t=[];return e.forEach(e=>{this.Qu.has(e)||t.push(new rb(e))}),this.Qu.forEach(n=>{e.has(n)||t.push(new rD(n))}),t}nc(e){this.Ku=e.Yi,this.Qu=tq();let t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return rE.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class rx{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rL{constructor(e){this.key=e,this.ic=!1}}class rV{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.rc={},this.oc=new tx(e=>e7(e),e8),this.uc=new Map,this.cc=new Set,this.ac=new eP(q.comparator),this.hc=new Map,this.lc=new nE,this.fc={},this.dc=new Map,this._c=nm.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function rM(e,t){let n,r;let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=rP.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rJ.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rK.bind(null,t),t.rc.Ho=rS.bind(null,t.eventManager),t.rc.gc=r_.bind(null,t.eventManager),t}(e),i=s.oc.get(t);if(i)n=i.targetId,s.sharedClientState.addLocalQueryTarget(n),r=i.view.sc();else{let e=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ns.getTargetData(e,t).next(s=>s?(r=s,G.resolve(r)):n.Ns.allocateTargetId(e).next(s=>(r=new nl(t,s,0,e.currentSequenceNumber),n.Ns.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Ki.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(e.targetId,e),n.Gi.set(t,e.targetId)),e})}(s.localStore,e9(t));s.isPrimaryClient&&n4(s.remoteStore,e);let i=s.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await rF(s,t,n,"current"===i,e.resumeToken)}return r}async function rF(e,t,n,r,s){e.mc=(t,n,r)=>(async function(e,t,n,r){let s=t.view.Hu(n);s.Li&&(s=await nM(e.localStore,t.query,!1).then(({documents:e})=>t.view.Hu(e,s)));let i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return rH(e,t.targetId,a.tc),a.snapshot})(e,t,n,r);let i=await nM(e.localStore,t,!0),a=new rR(t,i.Yi),o=a.Hu(i.documents),l=tB.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);rH(e,n,u.tc);let h=new rx(t,n,a);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function rO(e,t){let n=e.oc.get(t),r=e.uc.get(n.targetId);if(r.length>1)return e.uc.set(n.targetId,r.filter(e=>!e8(e,t))),void e.oc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nV(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),n3(e.remoteStore,n.targetId),rz(e,n.targetId)}).catch(B)):(rz(e,n.targetId),await nV(e.localStore,n.targetId,!0))}async function rU(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=r$.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rB.bind(null,t),t}(e);try{var s,i;let e;let a=await function(e,t){let n,r;let s=V.now(),i=t.reduce((e,t)=>e.add(t.key),tq());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tL,l=tq();return e.ji.getEntries(a,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let i=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),s=ta(r.transform,e||null);null!=s&&(null===n&&(n=eQ.empty()),n.set(r.field,s))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&i.push(new tC(e.key,t,function e(t){let n=[];return Y(t.fields,(t,r)=>{let s=new P([t]);if(ev(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(s);else for(let e of t)n.push(s.child(e))}else n.push(s)}),new eG(n)}(t.value.mapValue),ty.exists(!0)))}return e.mutationQueue.addMutationBatch(a,s,i,t)}).next(t=>{r=t;let s=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,s)})}).then(()=>({batchId:r.batchId,changes:tF(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),s=r,i=a.batchId,(e=s.fc[s.currentUser.toKey()])||(e=new eP(x)),e=e.insert(i,n),s.fc[s.currentUser.toKey()]=e,await rY(r,a.changes),await ri(r.remoteStore)}catch(t){let e=ry(t,"Failed to persist write");n.reject(e)}}async function rP(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,s=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i;let a,o;let l=n.ji.newChangeBuffer({trackRemovals:!0});s=n.Ki;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=s.get(a);if(!l)return;u.push(n.Ns.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.Ns.addMatchingKeys(e,i.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?h=h.withResumeToken(ee.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),s=s.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(n.Ns.updateTargetData(e,h))});let h=tL,c=tq();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((i=t.documentUpdates,a=tq(),o=tq(),i.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=tL;return i.forEach((n,r)=>{let s=e.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(M.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)}),{Hi:t,Ji:o}})).next(e=>{h=e.Hi,c=e.Ji})),!r.isEqual(M.min())){let t=n.Ns.getLastRemoteSnapshotVersion(e).next(t=>n.Ns.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(t)}return G.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(n.Ki=s,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.hc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||v(),t.addedDocuments.size>0?r.ic=!0:t.modifiedDocuments.size>0?r.ic||v():t.removedDocuments.size>0&&(r.ic||v(),r.ic=!1))}),await rY(e,n,t)}catch(e){await B(e)}}function rq(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.oc.forEach((n,r)=>{let s=r.view.bu(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(r=!0)}),r&&rN(n)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rK(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let s=r.hc.get(t),i=s&&s.key;if(i){let e=new eP(q.comparator);e=e.insert(i,ez.newNoDocument(i,M.min()));let n=tq().add(i),s=new t$(M.min(),new Map,new e$(x),e,n);await rP(r,s),r.ac=r.ac.remove(i),r.hc.delete(t),rW(r)}else await nV(r.localStore,t,!1).then(()=>rz(r,t,n)).catch(B)}async function r$(e,t){var n;let r=t.batch.batchId;try{let s=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let s=n.batch,i=s.keys(),a=G.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let i=n.docVersions.get(e);null!==i||v(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tq();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});rQ(e,r,null),rG(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rY(e,s)}catch(e){await B(e)}}async function rB(e,t,n){var r;try{let s=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||v(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});rQ(e,t,n),rG(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await rY(e,s)}catch(e){await B(e)}}function rG(e,t){(e.dc.get(t)||[]).forEach(e=>{e.resolve()}),e.dc.delete(t)}function rQ(e,t,n){let r=e,s=r.fc[r.currentUser.toKey()];if(s){let e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.fc[r.currentUser.toKey()]=s}}function rz(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.uc.get(t)))e.oc.delete(r),n&&e.rc.gc(r,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(t=>{e.lc.containsKey(t)||rj(e,t)})}function rj(e,t){e.cc.delete(t.path.canonicalString());let n=e.ac.get(t);null!==n&&(n3(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),rW(e))}function rH(e,t,n){for(let r of n)r instanceof rD?(e.lc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.ac.get(n)||e.cc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.cc.add(r),rW(e))}(e,r)):r instanceof rb?(p("SyncEngine","Document no longer in limbo: "+r.key),e.lc.removeReference(r.key,t),e.lc.containsKey(r.key)||rj(e,r.key)):v()}function rW(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){let t=e.cc.values().next().value;e.cc.delete(t);let n=new q(O.fromString(t)),r=e._c.next();e.hc.set(r,new rL(n)),e.ac=e.ac.insert(n,r),n4(e.remoteStore,new nl(e9(eZ(n.path)),r,2,z.at))}}async function rY(e,t,n){let r=[],s=[],i=[];e.oc.isEmpty()||(e.oc.forEach((a,o)=>{i.push(e.mc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nD.Ni(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.rc.Ho(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>G.forEach(t,t=>G.forEach(t.Ci,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>G.forEach(t.xi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Q(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Ki.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(t,s)}}}(e.localStore,s))}async function rX(e,t){let n=e;if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let e=await nx(n.localStore,t);n.currentUser=t,n.dc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.dc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rY(n,e.Wi)}}function rJ(e,t){let n=e.hc.get(t);if(n&&n.ic)return tq().add(n.key);{let n=tq(),r=e.uc.get(t);if(!r)return n;for(let t of r){let r=e.oc.get(t);n=n.unionWith(r.view.Wu)}return n}}class rZ{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=nj(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){var t,n,r,s;return t=this.persistence,n=new nb,r=e.initialUser,s=this.Tt,new nR(t,n,r,s)}Tc(e){return new n_(nk.qs,this.Tt)}Ic(e){return new nO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rq(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=rX.bind(null,this.syncEngine),await rf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rI}createDatastore(e){var t,n,r;let s=nj(e.databaseInfo.databaseId),i=(t=e.databaseInfo,new nQ(t));return n=e.authCredentials,r=e.appCheckCredentials,new nJ(n,r,i,s)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>rq(this.syncEngine,e,0),i=nP.C()?new nP:new nU,new n0(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){let o=new rV(e,t,n,r,s,i);return a&&(o.wc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){p("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await n2(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):g("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=ry(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function r4(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nx(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function r3(e,t){e.asyncQueue.verifyOperationInProgress();let n=await r9(e);p("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>rd(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rd(t.remoteStore,n)),e.onlineComponents=t}async function r9(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await r4(e,new rZ)),e.offlineComponents}async function r6(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await r3(e,new r0)),e.onlineComponents}async function r5(e){let t=await r6(e),n=t.eventManager;return n.onListen=rM.bind(null,t.syncEngine),n.onUnlisten=rO.bind(null,t.syncEngine),n}let r8=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r7(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function se(e){if(!q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function st(e){if(q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sn(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":v()}function sr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=sn(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ss({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ss(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"gapi":let t=e.client;return new k(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=r8.get(e);t&&(p("ComponentProvider","Removing Datastore"),r8.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sa(this.firestore,e,this._key)}}class so{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new so(this.firestore,e,this._query)}}class sl extends so{constructor(e,t,n){super(e,t,eZ(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sa(this.firestore,null,new q(e))}withConverter(e){return new sl(this.firestore,e,this._path)}}function su(e,t,...n){if(e=(0,l.m9)(e),r7("collection","path",t),e instanceof si){let r=O.fromString(t,...n);return st(r),new sl(e,null,r)}{if(!(e instanceof sa||e instanceof sl))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(O.fromString(t,...n));return st(r),new sl(e.firestore,null,r)}}function sh(e,t){if(e=sr(e,si),r7("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new so(e,null,new eJ(O.emptyPath(),t))}function sc(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=R.R()),r7("doc","path",t),e instanceof si){let r=O.fromString(t,...n);return se(r),new sa(e,null,new q(r))}{if(!(e instanceof sa||e instanceof sl))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(O.fromString(t,...n));return se(r),new sa(e.firestore,e instanceof sl?e.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new nH(this,"async_queue_retry"),this.Hc=()=>{let e=nz();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};let e=nz();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;let t=nz();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});let t=new I;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Q(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){let t=this.qc.then(()=>(this.jc=!0,e().catch(e=>{let t;this.Qc=e,this.jc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw g("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.jc=!1,e))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);let r=rg.createAndSchedule(this,e,t,n,e=>this.Xc(e));return this.Gc.push(r),r}Jc(){this.Qc&&v()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(let t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{for(let t of(this.Gc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Gc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){let t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function sf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class sm extends si{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sd,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sy(this),this._firestoreClient.terminate()}}function sp(e,t){let n="object"==typeof e?e:(0,i.Mq)(),r=(0,i.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){var s;let i=(e=sr(e,si))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}e._authCredentials=new S(new A(t,n))}}(r,...e)}return r}function sg(e){return e._firestoreClient||sy(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sy(e){var t,n,r,s;let i=e._freezeSettings(),a=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new j(n,r,s,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new r2(e._authCredentials,e._appCheckCredentials,e._queue,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sw(ee.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sw(ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sI=/^__.*__$/;class sA{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tC(e,this.data,this.fieldMask,t,this.fieldTransforms):new tA(e,this.data,t,this.fieldTransforms)}}class sC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tC(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sS(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class s_{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new s_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.aa(e),r}ha(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return sU(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(sS(this.ra)&&sI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class sN{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||nj(e)}wa(e,t,n,r=!1){return new s_({ra:e,methodName:t,_a:n,path:P.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function sk(e){let t=e._freezeSettings(),n=nj(e._databaseId);return new sN(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sD extends sE{_toFieldTransform(e){if(2!==e.ra)throw 1===e.ra?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sD}}class sb extends sE{_toFieldTransform(e){return new tp(e.path,new to)}isEqual(e){return e instanceof sb}}function sR(e,t){if(sL(e=(0,l.m9)(e)))return sV("Unsupported field value:",t,e),sx(e,t);if(e instanceof sE)return function(e,t){if(!sS(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&4!==t.ra)throw t.fa("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let s of e){let e=sR(s,t.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,s;return n=t.Tt,"number"==typeof(s=r=e)&&Number.isInteger(s)&&!J(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?ts(r):tr(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=V.fromDate(e);return{timestampValue:t1(t.Tt,n)}}if(e instanceof V){let n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t1(t.Tt,n)}}if(e instanceof sT)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sw)return{bytesValue:t2(t.Tt,e._byteString)};if(e instanceof sa){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:t3(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${sn(e)}`)}(e,t)}function sx(e,t){let n={};return X(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Y(e,(e,r)=>{let s=sR(r,t.ua(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function sL(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof sT||e instanceof sw||e instanceof sa||e instanceof sE)}function sV(e,t,n){if(!sL(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=sn(n);throw"an object"===r?t.fa(e+" a custom object"):t.fa(e+" "+r)}}function sM(e,t,n){if((t=(0,l.m9)(t))instanceof sv)return t._internalPath;if("string"==typeof t)return sO(e,t);throw sU("Field path arguments must be of type string or ",e,!1,void 0,n)}let sF=RegExp("[~\\*/\\[\\]]");function sO(e,t,n){if(t.search(sF)>=0)throw sU(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sv(...t.split("."))._internalPath}catch(r){throw sU(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sU(e,t,n,r,s){let i=r&&!r.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}function sP(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sa(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sK(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(s$("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sK extends sq{data(){return super.data()}}function s$(e,t){return"string"==typeof t?sO(e,t):t instanceof sv?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sB(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sG{}class sQ extends sG{}function sz(e,t,...n){let r=[];for(let s of(t instanceof sG&&r.push(t),function(e){let t=e.filter(e=>e instanceof sH).length,n=e.filter(e=>e instanceof sj).length;if(t>1||t>0&&n>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=s._apply(e);return e}class sj extends sQ{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sj(e,t,n)}_apply(e){let t=this._parse(e);return sX(e._query,t),new so(e.firestore,e.converter,e6(e._query,t))}_parse(e){let t=sk(e.firestore),n=function(e,t,n,r,s,i,a){let o;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){sY(a,i);let t=[];for(let n of a)t.push(sW(r,e,n));o={arrayValue:{values:t}}}else o=sW(r,e,a)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||sY(a,i),o=function(e,t,n,r=!1){return sR(n,e.wa(r?4:3,t))}(n,t,a,"in"===i||"not-in"===i);return e_.create(s,i,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class sH extends sG{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sH(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eN.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)sX(n,e),n=e6(n,e)}(e._query,t),new so(e.firestore,e.converter,e6(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function sW(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e4(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(O.fromString(n));if(!q.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return em(e,new q(r))}if(n instanceof sa)return em(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sn(n)}.`)}function sY(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sX(e,t){if(t.isInequality()){let n=e2(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let s=e1(e);null!==s&&function(e,t,n){if(!n.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,r,s)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class sJ{convertValue(e,t="none"){switch(el(e)){case 0:return null;case 1:return e.booleanValue;case 2:return er(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){let n={};return Y(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new sT(er(e.latitude),er(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return ei(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){let t=en(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=O.fromString(e);ns(n)||v();let r=new H(n.get(1),n.get(3)),s=new q(n.popFirst(5));return r.isEqual(t)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s0 extends sq{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new s1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(s$("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class s1 extends s0{data(e={}){return super.data(e)}}class s2{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sZ(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new s1(this._firestore,this._userDataWriter,n.key,n,new sZ(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new s1(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sZ(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new s1(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sZ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(i=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(e){e=sr(e,sa);let t=sr(e.firestore,sm);return(function(e,t,n={}){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){let i=new r1({next:i=>{t.enqueueAndForget(()=>rC(e,a));let o=i.docs.has(n);!o&&i.fromCache?s.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&i.fromCache&&r&&"server"===r.source?s.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),a=new rk(eZ(n.path),i,{includeMetadataChanges:!0,$u:!0});return rA(e,a)})(await r5(e),e.asyncQueue,t,n,r)),r.promise})(sg(t),e._key).then(n=>it(t,e,n))}class s3 extends sJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new sw(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sa(this.firestore,null,t)}}function s9(e){e=sr(e,so);let t=sr(e.firestore,sm),n=sg(t),r=new s3(t);return sB(e._query),(function(e,t,n={}){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){let i=new r1({next:n=>{t.enqueueAndForget(()=>rC(e,a)),n.fromCache&&"server"===r.source?s.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),a=new rk(n,i,{includeMetadataChanges:!0,$u:!0});return rA(e,a)})(await r5(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new s2(t,r,e,n))}function s6(e,t,n){var r;e=sr(e,sa);let s=sr(e.firestore,sm),i=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return ie(s,[(function(e,t,n,r,s,i={}){let a,o;let l=e.wa(i.merge||i.mergeFields?2:0,t,n,s);sV("Data must be an object, but it was:",l,r);let u=sx(r,l);if(i.merge)a=new eG(l.fieldMask),o=l.fieldTransforms;else if(i.mergeFields){let e=[];for(let r of i.mergeFields){let s=sM(t,r,n);if(!l.contains(s))throw new T(E.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);sP(e,s)||e.push(s)}a=new eG(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sA(new eQ(u),a,o)})(sk(s),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ty.none())])}function s5(e,t,n,...r){let s;e=sr(e,sa);let i=sr(e.firestore,sm),a=sk(i);return s="string"==typeof(t=(0,l.m9)(t))||t instanceof sv?function(e,t,n,r,s,i){let a=e.wa(1,t,n),o=[sM(t,r,n)],u=[s];if(i.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)o.push(sM(t,i[e])),u.push(i[e+1]);let h=[],c=eQ.empty();for(let e=o.length-1;e>=0;--e)if(!sP(h,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.ha(t);if(n instanceof sD)h.push(t);else{let e=sR(n,r);null!=e&&(h.push(t),c.set(t,e))}}let d=new eG(h);return new sC(c,d,a.fieldTransforms)}(a,"updateDoc",e._key,t,n,r):function(e,t,n,r){let s=e.wa(1,t,n);sV("Data must be an object, but it was:",s,r);let i=[],a=eQ.empty();Y(r,(e,r)=>{let o=sO(t,e,n);r=(0,l.m9)(r);let u=s.ha(o);if(r instanceof sD)i.push(o);else{let e=sR(r,u);null!=e&&(i.push(o),a.set(o,e))}});let o=new eG(i);return new sC(a,o,s.fieldTransforms)}(a,"updateDoc",e._key,t),ie(i,[s.toMutation(e._key,ty.exists(!0))])}function s8(e){return ie(sr(e.firestore,sm),[new tk(e._key,ty.none())])}function s7(e,...t){var n,r,s;let i,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},h=0;"object"!=typeof t[0]||sf(t[h])||(u=t[h],h++);let c={includeMetadataChanges:u.includeMetadataChanges};if(sf(t[h])){let e=t[h];t[h]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[h+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[h+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}if(e instanceof sa)a=sr(e.firestore,sm),o=eZ(e._key.path),i={next:n=>{t[h]&&t[h](it(a,e,n))},error:t[h+1],complete:t[h+2]};else{let n=sr(e,so);a=sr(n.firestore,sm),o=n._query;let r=new s3(a);i={next:e=>{t[h]&&t[h](new s2(a,r,n,e))},error:t[h+1],complete:t[h+2]},sB(e._query)}return function(e,t,n,r){let s=new r1(r),i=new rk(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>rA(await r5(e),i)),()=>{s.bc(),e.asyncQueue.enqueueAndForget(async()=>rC(await r5(e),i))}}(sg(a),o,c,i)}function ie(e,t){return function(e,t){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>rU(await r6(e).then(e=>e.syncEngine),t,n)),n.promise}(sg(e),t)}function it(e,t,n){let r=n.docs.get(t._key),s=new s3(e);return new s0(e,s,t._key,r,new sZ(n.hasPendingWrites,n.fromCache),t.converter)}function ir(){return new sb("serverTimestamp")}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let s=e.getProvider("app").getImmediate(),i=new sm(new _(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new H(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.9.0",void 0),(0,i.KN)(h,"3.9.0","esm2017")}()}}]);