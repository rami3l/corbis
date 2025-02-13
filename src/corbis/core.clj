(ns corbis.core
  (:require [clj-http.client :as client]
            [clojure.data.json :as json])
  (:gen-class))

(defn- query-album [id]
  (-> (str "https://music.163.com/api/album/" id)
      client/get :body
      (json/read-str :key-fn keyword)))

(defn- all-songs [album]
  (->> album :album :songs (map :id)))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(comment (let [id 2060534]
           (-> id query-album (doto prn) all-songs)))
