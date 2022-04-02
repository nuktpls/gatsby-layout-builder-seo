const { create } = require('xmlbuilder2')

const doc = create({ version: '1.0', encoding: 'UTF-8' })
	.ins(
		'xml-stylesheet',
		`version="2.0"		type="text/xsl" href="/api/xml/sitemap__style.xls"
	`
	)
	.ele('sitemapindex', {
		xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
	})
	.ele('sitemap')
	.ele('loc')
	.txt('Sitemap center')
	.up()
	.ele('lastmod')
	.txt('Sitemap center')
	.doc()

const printMe = doc.end({ prettyPrint: true })

export default function handler(req, res) {
	res.set('Content-Type', 'text/xml')
	res.send(printMe)
	// res.status(200).json(printMe)
}

// 					<xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
// 						<p class="expl">
// 					This XML Sitemap Index file contains
// 							<xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.

// 						</p>
// 						<table id="sitemap" cellpadding="3">
// 							<thead>
// 								<tr>
// 									<th width="75%">Sitemap</th>
// 									<th width="25%">Last Modified</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
// 									<xsl:variable name="sitemapURL">
// 										<xsl:value-of select="sitemap:loc"/>
// 									</xsl:variable>
// 									<tr>
// 										<td>
// 											<a href="{$sitemapURL}">
// 												<xsl:value-of select="sitemap:loc"/>
// 											</a>
// 										</td>
// 										<td>
// 											<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
// 										</td>
// 									</tr>
// 								</xsl:for-each>
// 							</tbody>
// 						</table>
// 					</xsl:if>
// 					<xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
// 						<p class="expl">
// 					This XML Sitemap contains
// 							<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.

// 						</p>
// 						<table id="sitemap" cellpadding="3">
// 							<thead>
// 								<tr>
// 									<th width="80%">URL</th>
// 									<th width="5%">Images</th>
// 									<th title="Last Modification Time" width="15%">Last Mod.</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
// 								<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
// 								<xsl:for-each select="sitemap:urlset/sitemap:url">
// 									<tr>
// 										<td>
// 											<xsl:variable name="itemURL">
// 												<xsl:value-of select="sitemap:loc"/>
// 											</xsl:variable>
// 											<a href="{$itemURL}">
// 												<xsl:value-of select="sitemap:loc"/>
// 											</a>
// 										</td>
// 										<td>
// 											<xsl:value-of select="count(image:image)"/>
// 										</td>
// 										<td>
// 											<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
// 										</td>
// 									</tr>
// 								</xsl:for-each>
// 							</tbody>
// 						</table>
// 					</xsl:if>
// 				</div>
// 			</body>
// 		</html>
// 	</xsl:template>
// </xsl:stylesheet>
