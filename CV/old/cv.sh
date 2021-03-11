unzip DouglasSquirrel-CV.zip
mv DouglasSquirrelCV.html DouglasSquirrelCV-untidy.html
tidy DouglasSquirrelCV-untidy.html > DouglasSquirrelCV.html
rm DouglasSquirrelCV-untidy.html
sed -n '/<style/,/<\/style>/p;/<\/style>/q' DouglasSquirrelCV.html | awk 'NR==2' > ds.css
sed -i '/<style/,/<\/style>/{ s/<\/style>/<link rel="stylesheet" type="text\/css" href="ds.css">/; t; d }' DouglasSquirrelCV.html
