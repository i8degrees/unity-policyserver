# Unity Socket Policy Server

## Usage

Create crossdomain.xml in same directory as server.js, if you do not have an existing one:

```
touch crossdomain.xml
echo "<?xml version='1.0'?><cross-domain-policy><allow-access-from domain='*'/></cross-domain-policy>" > crossdomain.xml
```

```
sudo node server.js
```

Verifying working state:

```
node client.js
```

## Notes

* Uses crossdomain.xml example from http://docs.unity3d.com/Manual/SecuritySandbox.html

* It is strongly recommended that you change the default listening port number from 843 to something above 1024, as this allows you to run with reduced privileges (i.e.: not root).

* Connections via telnet does **not** work.

## TODO

* Package
* Integration with express? 
* Unit tests
