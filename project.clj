(defproject corbis "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.clojure/data.json "2.5.1"]
                 [clj-http/clj-http "3.13.0"]]
  :main ^:skip-aot corbis.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
