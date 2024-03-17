import pandas as pd
import requests
from bs4 import BeautifulSoup
# import json

sites = ['https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css', 
         'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript', 
         'https://www.theodinproject.com/paths/full-stack-javascript/courses/advanced-html-and-css', 
         'https://www.theodinproject.com/paths/full-stack-javascript/courses/react', 
         'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs', 
         'https://www.theodinproject.com/paths/full-stack-javascript/courses/getting-hired']

url = ''

# for site in sites:
#     # url = site
#     data = pd.read_html(site, header=None)
#     print(data); 
# for i, url in enumerate(sites):
response = requests.get(sites[5]); 
html = response.content
soup = BeautifulSoup(html, 'html.parser')
# print(f"Table {i+1} from {url}:")
print('__')
print(soup.prettify()); 

# tables = pd.read_html(url, header=None)
# tables = pd.read_html(url, header=None)