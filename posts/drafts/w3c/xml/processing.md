PROCESSING

A processing model defines what operations should be performed in what order on an XML document.

current status：
+ XML Pipeline (XProc)
+ XInclude

What is XProc?

An unusual characteristic of XML is that documents in that format do not have intrinsic meaning: any XML processor is free to interpret any XML document in any way. This is sometimes called the XML Promise. However, it is often useful to be able to suggest how a particular document might be processed. The XProc specification provides a way to do that: XProc: An XML Pipeline Language is an XML-based language for describing operations to be performed on XML documents.

Note that there is no single processing model for all XML Documents, and there is no default processing model. XProc (XML Pipeline) is one example of a way to say how to process an XML document. You can also have multiple XML Pipelines that you might select from to process a given document.

What is XProc Used For?

Use XProc to say that a particular document or set of documents should be processed in a certain order: for example, first XInclude and then XSD Schema validation, and then XSLT with a particular XSL stylesheet.

Examples

	<pipeline xmlns="http://www.w3.org/ns/xproc">
		<xinclude/>
		<validate-with-xml-schema>
			<input port="schema">
				<document href="http://example.com/path/to/schema.xsd"/>
			</input>
		</validate-with-xml-schema>
		<xslt>
		<input port="stylesheet">
			<document href="http://example.com/path/to/stylesheet.xsl"/>
		</input>
		</xslt>
	</pipeline>

This example indicates that a document with which this pipeline is associated should first have XInclude processing done on it, then be validated with a specific schema, and finally have an XSLT stylesheet applied to the result of validation.