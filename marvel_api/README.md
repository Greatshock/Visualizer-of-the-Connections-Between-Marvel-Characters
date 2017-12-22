## Files

* data/* - all the data fetched using Marvel API
    * comics_chunks/* - chunks of comics data, which have been then merged into a single file marvel_db_comics.json
    * marvel_db_characters.json - file containing all available characters
    * marvel_db_comics.json - file containing all available comics
* fetch_marvel_characters_script.ipynb - script for fetching characters
* fetch_marvel_comics_script.ipynb - script for fetching comics
* check_uniqueness_script.ipynb - script to check the fetched data for duplicates

#### Warning

* _marvel_db_characters.json_ might not contain the full list of comics a particular character appears in
* _marvel_db_comics.json_ might not contain the full list of characters who appear in a particular comic

If you need this info, I have fetched and provided it in my own database available [here](https://github.com/Greatshock/Visualizer-of-the-Connections-Between-Marvel-Characters/tree/master/database)