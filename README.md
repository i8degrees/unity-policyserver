# Unity Socket Policy Server

## Usage

Create ```crossdomain.xml``` in same directory as server.js, if you do not have an existing one:

```
touch crossdomain.xml
echo "<?xml version='1.0'?><cross-domain-policy><allow-access-from domain='*'/></cross-domain-policy>" > crossdomain.xml
```

```
sudo node server.js
```

Verifying working state:

```
node tests/client.js
```

## Notes

* Uses crossdomain.xml example from http://docs.unity3d.com/Manual/SecuritySandbox.html

* It is strongly recommended that you change the default listening port number from 843 to something above 1024, as this allows you to run with reduced privileges (i.e.: not root). See also: http://docs.unity3d.com/ScriptReference/Security.PrefetchSocketPolicy.html

* Connections via telnet does **not** work.

## TODO

* Package
* Example of using app with Express? 

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

