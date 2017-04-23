#ifndef GetWorker_H
#define GetWorker_H

#include <nan.h>
#include "rocksdb/db.h"

class GetWorker : public Nan::AsyncWorker {
 public:
  GetWorker(Nan::Callback *callback, rocksdb::DB *db, rocksdb::Slice key, bool isBuffer, rocksdb::ReadOptions options);
  ~GetWorker();
  virtual void Execute();
  virtual void HandleOKCallback ();

 private:
  rocksdb::DB *_db;
  rocksdb::Slice _key;
  std::string _value;
  rocksdb::Status _status;
  bool _buffer;
  rocksdb::ReadOptions _options;
};

#endif  // GetWorker_H