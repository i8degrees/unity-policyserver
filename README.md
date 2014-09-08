# Unity Socket Policy Server

A simple, light-weight Unity3D Socket Policy Server for [node.js](http://nodejs.org).

## Installation

## Usage

**NOTE:** Must be invoked from the package's root directory.

```
grunt
```

### Testing Communication With Server

**NOTE:** Must be invoked from the package's root directory.

```
grunt test
```

## Configuration

The following environment variables can be set through either the package's local **.env** file, or by setting the following name value pair from within a script or interactive shell (i.e.: ```UNITY_POLICY_SERVER_HOST=0.0.0.0``` under BASH). Note that the .env configuration will overwrite existing environment variables of with the same name.

```UNITY_POLICY_SERVER_HOST``` *(.env defaults to localhost)*

**NOTE:** The default server host value for Unity3D's sockpol.exe implementation is 0.0.0.0, *not* localhost (as per version 4.3.4f1).

```UNITY_POLICY_SERVER_PORT``` *(.env defaults to 843)*
```UNITY_POLICY_SERVER_TIMEOUT``` *(.env defaults to 3000 milliseconds)*
```UNITY_POLICY_SERVER_FILE``` *(.env defaults to crossdomain.xml)*

**NOTE:** Be sure to restart the server after modifying configuration values!

## Notes

* It is strongly recommended that you change the default listening port number from 843 to something above 1024, as this allows you to run with reduced privileges (i.e.: not root). See also: http://docs.unity3d.com/ScriptReference/Security.PrefetchSocketPolicy.html

* Connections via telnet does **not** work.

## TODO

* Package
* Example of using app with Express? 
* 'stop', 'restart' functionality from within package.json
* Logging output to file

## Contributing

Fork [project](https://github.com/i8degrees/unity-policyserver/) from the web.

Create a new branch (i.e.: bugfix/font-rendering):

```
git checkout -b bugfix/font-rendering
```

Make your changes.

Commit your changes to your new branch:

```
git commit -am 'Fix font rendering issue'
```

Push changes to your remote branch:

```
git push origin bugfix/font-rendering
```

Create a [Pull Request](https://github.com/i8degrees/unity-policyserver/pulls/).

## License (Simplified BSD)

Copyright (c) 2014, Jeffrey Carpenter <i8degrees@gmail.com>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

