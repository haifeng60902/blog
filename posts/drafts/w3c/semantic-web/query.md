QUERY

current status：
+ SPARQL

What is Query?

“Query” in the Semantic Web context means technologies and protocols that can programmatically retrieve information from the Web of Data.

What is Query Used For?

The Semantic Web is a Web of data — of dates and titles and part numbers and chemical properties and any other data one might conceive of. RDF provides the foundation for publishing and linking your data. Various technologies allow you to embed data in documents (RDFa, GRDDL) or expose what you have in SQL databases, or make it available as RDF files.

However, just as relational databases or XML need specific query languages (SQL and XQuery, respectively), the Web of Data, typically represented using RDF as a data format, needs its own, RDF-specific query language and facilities. This is provided by the SPARQLquery language and the accompanying protocols. SPARQL makes it possible to send queries and receive results, e.g., through HTTP or SOAP.

Technically, SPARQL queries are based on (triple) patterns. RDF can be seen as a set of relationships among resources (i.e., RDF triples); SPARQL queries provide one or more patterns against such relationships. These triple patterns are similar to RDF triples, except that one or more of the constituent resource references are variables. A SPARQL engine would returns the resources for all triples that match these patterns.

Using SPARQL consumers of the Web of Data can extract possibly complex information (i.e., existing resource references and their relationships) which are returned, for example, in a table format. This table can be incorporated into another Web page; using this approach SPARQL provides a powerful tool to build, for example, complex mash-up sites or search engines that include data stemming from the Semantic Web.

Examples

The short introduction on inferences includes a small example with a dataset containing the triple (Flipper isA Dolphin). Using SPARQL the user may issue a query of the form (Flipper isA ?species) where ?species denotes a variable. The query engine checks through the data and retrieves the value of Dolphin as a possible value for ?species which constitutes a possible answer to the query. The dataset may also contain the triple (Flipper isA Mammal) (e.g., as a result of an inference); in this case Mammal is also a possible value for ?species which should also be returned as a result of the query. By providing several triple patterns, complex queries can be created and used by the application.

Learn More

The Semantic Web community maintains a list of books on a W3C Wiki page. Some of those books are introductory in nature while others are conference proceedings or textbook that address more advanced topics. Details of recent and upcoming Semantic Web related talks, given by the W3C Staff, the staff of the W3C Offices, and members of the W3C Working Groups are available separately; the slides are usually publicly available. The W3C also maintains a collection of Semantic Web Case Studies and Use Cases that show how Semantic Web technologies, including queries, are used in practice. Finally, the Semantic Web FAQ may also be of help in understanding the various concepts.