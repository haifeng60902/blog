Metadata Block
=============

Contents
--------
1. Description
2. Syntax
	1. @description
	2. @downloadURL
	3. @exclude
	4. @grant
	5. @icon
	6. @include
	7. @match
	8. @name
	9. @namespace
	10. @require
	11. @resource
	12. @run-at
	13. @unwrap
	14. @updateURL
	15. @version
3. Examples
4. Adding Resources
5. See Also
6. Notes

Description
-----------

The metadata block is a section of a user script that describes the script. It usually contains the script name, namespace, description, and include and exclude rules. The metadata block appears in JavaScript line comments and may appear anywhere in the top level Greasemonkey code scope of the script, but is usually near the top of the file.

If the metadata block includes a key that Greasemonkey does not understand, it will simply be ignored. Some authors choose to include their own keys, and userscripts.org defines a set of metadata keys for varying purposes.

As of Greasemonkey 0.9.0, the metadata block is reloaded any time the file changes, just like the rest of the source in the script. In any older version, one must re-install the script for metadata changes to be recognized. In 0.9.0+, editing the script is how (e.g.) @include and @exclude rules are customized. All of the metadata imperatives can be added, removed, or changed, but be careful with the @name and @namespace imperatives: their combination must remain unique among installed scripts, so changing them can cause problems.

Syntax
------

The metadata block must follow the format:

	// ==UserScript==
	// @key value
	// ==/UserScript==

It must use line comments (//) like above, not block comments (/* */). Note that the opening // ==UserScript== and closing // ==/UserScript== must be precisely at the beginning of its line. Some keys may have multiple values. In all cases the key and value(s) are separated by whitespace. The closing ==/UserScript== line should be at the end of the metadata block (not at the end of the script).

###@description

Example:

	// @description This script even does the laundry!

Just a brief summary of what the script does, presented to the user as the script is installed, and in the manage dialog.

###@downloadURL

The URL to download this script from, when installing updates.

	// @downloadURL https://www.example.com/myscript.user.js

Greasemonkey's default settings require this value to be secure (https://...) for updates to be applied. If it is not specified, the URL the script was originally installed from will be used.

###@exclude

Examples: see @include
See Include and exclude rules. There can be any number of @exclude rules in a script.

###@grant

See dedicated @grant page.

###@icon

Compatibility: Greasemonkey 0.9.0+

Example:

	// @icon http://www.example.org/icon.png

The icon is, as of Greasemonkey 0.9.0, displayed in the script management interface. Almost any image will work, but a 32x32 pixel size is best.

###@include

Examples:

	// @include http://www.example.com/*
	// @include http://*
	// @include *

See Include and exclude rules. There can be any number of @include rules in a script.

###@match

Compatibility: Greasemonkey 0.9.8+

Examples:

	// @match https://www.example.com/*
	// @match http://*.example.com/*

The @match metadata imperative is very similar to @include, however it is safer. It sets more strict rules on what the * character means.

For details, see the documentation on Match Patterns for Google Chrome. Chrome implemented @match first, and Greasemonkey has been designed to be compatible.

###@name

Example:

	// @name Example Script

The name of the script. This appears in the script manager and monkey menu, and is also the unique identifier of a script (within a namespace). If no name is provided, it will be derived from the file name.

###@namespace

Example:

	// @namespace http://www.example.com/gmscripts

The combination of namespace and name is the unique identifier for a Greasemonkey script. If a script is being installed, and a script with that same name and namespace already exists, it will be replaced by the new script. Otherwise, the new script is added to the set of installed scripts. A script author will usually put all of their scripts under one common namespace, and then assign each script a unique name.

While the namespace is non-semantic, a URL is often used. Some authors use the common home page for the collection of scripts they have written. But remember, the namespace can be any unique value.

###@require

Compatibility: Greasemonkey 0.8.0+

Example:

	// @require http://www.example.com/example.js

There can be any number of @require keys in a script. Each @require is downloaded once, when the script is installed, and stored on the user's hard drive alongside the script. The URL specified may be relative to the URL the script is being installed from.

Note that since Greasemonkey 0.9.0, if Greasemonkey detects that the @require value(s) have been altered, these new values will be used (thus each @require shall be re-downloaded).

See also:

+ Category:@require Library
+ Adding Resources

###@resource

Compatibility: Greasemonkey 0.8.0+

Example:

	// @resource resourceName http://www.example.com/example.png

There can be any number of @resource keys in a script.

While the resourceName is non-semantic, it should comply with JavaScript identifier restrictions. Each @resource must have a unique name.

Each @resource is downloaded once, when the script is installed, and stored on the user's hard drive alongside the script. The URL specified may be relative to the URL the script is being installed from.

These named resources may be accessed through GM_getResourceText and GM_getResourceURL respectively.

Note that since Greasemonkey 0.9.0, if Greasemonkey detects that the @resource value(s) have been altered, these new values will be used (thus each @resource shall be re-downloaded).

See also:

+ Adding Resources

###@run-at

Compatibility: Greasemonkey 0.9.8+

Example:

	// @run-at document-end

Supports two values: document-end and document-start.

End is the standard behavior that Greasemonkey has always had (see DOMContentLoaded). This is the default if no value is provided.

Start is new as of version 0.9.8. The script will run before any document begins loading, thus before any scripts run or images load.

To detect if you are running at document-start time, check the value of document.readyState. For example:

	if ('loading' == document.readyState) {
		alert("This script is running at document-start time.");
	} else {
		alert("This script is running with document.readyState: " + document.readyState);
	}

Scripts running at document-end will have the value interactive here.

###@unwrap

Compatibility: Greasemonkey 0.8.1 through 0.9.22

Note: This key has been removed from version 1.0+

Example:

	// @unwrap

This declarative key has no associated value. It changes the interpretation of the script as it executes.

Normally, Greasemonkey scripts are wrapped in an anonymous function when they are executed. This behavior started in very early versions of Greasemonkey, which ran scripts directly in the content page, to separate their variables from those in the page. In later versions, it remains because isolating the script from the sandbox scope still helps in certain cases.

This key is strongly recommended to only be used for debugging purposes.

###@updateURL

The URL that Greasemonkey will download when checking for script updates.

	// @updateURL https://www.example.com/myscript.meta.js

This URL need only contain the metadata block. If the #@version specified here is newer than the installed version, an update will be offered to the user.

###@version

Compatibility: Greasemonkey 0.9.0+

Example:

	// @version 1.0

This is the version of the script, which should be treated like a firefox extension version, and maintain the same syntax.

The version is used by the auto-update feature implemented in Greasemonkey 0.9.12. When this value is set, and if the auto-update feature is enabled, Greasemonkey will check periodically for new versions of the script by downloading it again from the location where the installed version of the script was downloaded, and compare the @version value in the newly downloaded script with that value in the installed script. With previous versions of Greasemonkey 0.9.0+, this value was only used for display in the script management interface.

Examples
--------

	// ==UserScript==
	// @name          My Script
	// @namespace     http://www.example.com/gmscripts
	// @description   Scripting is fun
	// @include       http://www.example.com/*
	// @include       http://www.example.org/*
	// @exclude       http://www.example.org/foo
	// @require       foo.js
	// @resource      resourceName1 resource1.png
	// @resource      resourceName2 http://www.example.com/resource2.png
	// @version       1.0
	// @icon          http://www.example.net/icon.png
	// ==/UserScript==

Adding Resources
----------------

Two metadata imperatives allow downloading files (once, at install time) for efficient reference: First #@require, which includes a remote code resource. Second #@resource, which makes a remote data resource available.

It is possible to add a new entry for either of these values, while editing a script that is already installed. In either case, simply add the appropriate line and the referenced file will be downloaded and made available the next time the script runs. If you specify a relative URL, then it will be interpreted as relative to the the URL the script was originally downloaded from. If there was no original download URL (i.e. a brand new script created from a local file), then this will work if you also create an appropriately named file alongside the script. (As of Greasemonkey 1.0.)

See Also
--------

+ API reference
+ Knowing Your Own Metadata
+ Third-Party Libraries

Notes
-----

Category: API Reference