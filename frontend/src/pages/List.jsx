// Search Engine
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Highlight, Hits, InstantSearch, SearchBox } from "react-instantsearch";
import { User } from "lucide-react";
import { RefinementList, Pagination } from "react-instantsearch";

const algoliaAppID = "MVSHZ9B40C";
const algoliaApiKey = "b567cbcb368ff2b82e97477ec41366f7";

const searchClient = algoliasearch(algoliaAppID, algoliaApiKey);

const Hit = ({ hit }) => {
  console.log(hit.name.name);
  return (
    <article>
      <div className="p-8 flex w-full">
        <div>
          <h2 className="text-xl font-bold hover:underline">{hit.name.name}</h2>
          <Highlight attribute="email" hit={hit} />
          <div className="max-w-xl flex">
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
            <div className="p-4 bg-green-300"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

const SearchResult = () => {
  return <Hits hitComponent={Hit} />;
};

import React from "react";

const List = () => {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="employee_list">
        <div className=" text-green-500 bg-gray-900 bg-opacity-50 p-8 rounded-xl ">
          <div className="bg-red-800 flex">
            <User />
            <SearchBox classNames={{}} />
          </div>
          <SearchResult />
        </div>
        <Pagination classNames={{}} />
      </InstantSearch>
    </div>
  );
};

export default List;
