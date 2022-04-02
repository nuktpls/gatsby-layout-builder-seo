export default function handler(req, res) {
	res.set('Content-Type', 'text/xml')

	res.status(200).json({ hello: 'na srf' })
}
// https://yoast.com/?s=schema
// <?xml version="1.0"?>
// <OpenSearchDescription
// 	xmlns="http://a9.com/-/spec/opensearch/1.1/"
// 	xmlns:moz="http://www.mozilla.org/2006/browser/search/">
// 	<ShortName>Yoast.com</ShortName>
// 	<Description>Yoast.com search</Description>
// 	<InputEncoding>UTF-8</InputEncoding>
// 	<Image height="16" width="16" type="image/x-icon">https://yoast.com/favicon.ico</Image>
// 	<Url type="text/html" template="https://yoast.com/">
// 		<Param name="s" value="{searchTerms}"/>
// 	</Url>
// 	<moz:SearchForm>https://yoast.com/</moz:SearchForm>
// </OpenSearchDescription>
